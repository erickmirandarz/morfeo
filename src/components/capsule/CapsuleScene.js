"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/* ------------------------------------------------------------------ */
/* Recorrido de la cápsula según el scroll                             */
/* Cada fotograma clave corresponde a una etapa del hero (0 → 3).       */
/* ------------------------------------------------------------------ */
const KEYFRAMES_DESKTOP = [
  // pos [x, y],      rotY,  rotX, escala, tapa, brillo
  { pos: [1.3, -0.05], rotY: -0.55, rotX: 0.2, scale: 0.78, lid: 0.06, glow: 0.3 },
  { pos: [-1.3, 0], rotY: 0.95, rotX: 0.28, scale: 0.8, lid: 0.22, glow: 0.5 },
  { pos: [1.25, -0.1], rotY: -0.3, rotX: 0.55, scale: 0.88, lid: 1.0, glow: 1.0 },
  { pos: [0, 0.62], rotY: -6.5, rotX: 0.34, scale: 0.55, lid: 0.55, glow: 0.75 },
];

const KEYFRAMES_MOBILE = KEYFRAMES_DESKTOP.map((k, i) => ({
  ...k,
  pos: [0, [1.18, 1.12, 0.9, 1.2][i]],
  scale: k.scale * 0.5,
}));

const smooth = (t) => t * t * (3 - 2 * t);

function sample(frames, p) {
  const seg = Math.min(frames.length - 2, Math.floor(p * (frames.length - 1)));
  const local = smooth(Math.min(1, Math.max(0, p * (frames.length - 1) - seg)));
  const a = frames[seg];
  const b = frames[seg + 1];
  const lerp = (x, y) => x + (y - x) * local;
  return {
    x: lerp(a.pos[0], b.pos[0]),
    y: lerp(a.pos[1], b.pos[1]),
    rotY: lerp(a.rotY, b.rotY),
    rotX: lerp(a.rotX, b.rotX),
    scale: lerp(a.scale, b.scale),
    lid: lerp(a.lid, b.lid),
    glow: lerp(a.glow, b.glow),
  };
}

/* ------------------------------------------------------------------ */
/* Iluminación ambiental para reflejos suaves (sin archivos externos)  */
/* ------------------------------------------------------------------ */
function StudioEnvironment() {
  const { gl, scene } = useThree();
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = env;
    scene.environmentIntensity = 0.55;
    return () => {
      scene.environment = null;
      env.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);
  return null;
}

/* ------------------------------------------------------------------ */
/* Cielo de estrellas                                                  */
/* ------------------------------------------------------------------ */
function StarField({ count = 420 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = -Math.abs(r * Math.cos(phi)) - 2;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#DCE2F0" size={0.035} sizeAttenuation transparent opacity={0.8} depthWrite={false} />
    </points>
  );
}

/* ------------------------------------------------------------------ */
/* Cápsula de flotación                                                */
/* ------------------------------------------------------------------ */
const SHELL = [1.25, 0.6, 0.7]; // radio en X (largo), Y (alto), Z (ancho)

function Capsule({ progressRef, pointerRef, reducedMotion }) {
  const root = useRef();
  const lidPivot = useRef();
  const water = useRef();
  const innerLight = useRef();
  const glowMats = useRef([]);
  const state = useRef({ x: 0, y: 0, rotY: 0, rotX: 0, scale: 1, lid: 0, glow: 0, init: false });
  const { size } = useThree();
  const frames = size.width < 1024 ? KEYFRAMES_MOBILE : KEYFRAMES_DESKTOP;

  // Geometrías (semiesferas que forman el "huevo")
  const lower = useMemo(() => new THREE.SphereGeometry(1, 96, 48, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), []);
  const upper = useMemo(() => new THREE.SphereGeometry(1, 96, 48, 0, Math.PI * 2, 0, Math.PI / 2), []);

  // Textura radial para el "agua" iluminada (centro brillante, bordes azul intenso)
  const waterTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 256;
    const ctx = c.getContext("2d");
    const g = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
    g.addColorStop(0, "#E8ECFF");
    g.addColorStop(0.45, "#A9B6FF");
    g.addColorStop(1, "#4E5FD8");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);

  const addGlow = (m) => {
    if (m && !glowMats.current.includes(m)) glowMats.current.push(m);
  };

  useFrame((three, delta) => {
    const t = sample(frames, progressRef.current);
    const s = state.current;
    if (!s.init) {
      Object.assign(s, t, { init: true });
    }
    const k = 5;
    for (const key of ["x", "y", "rotY", "rotX", "scale", "lid", "glow"]) {
      s[key] = THREE.MathUtils.damp(s[key], t[key], k, delta);
    }

    const g = root.current;
    if (!g) return;
    const time = three.clock.elapsedTime;
    const bob = reducedMotion ? 0 : Math.sin(time * 1.1) * 0.05;
    const px = pointerRef.current.x;
    const py = pointerRef.current.y;

    g.position.set(s.x, s.y + bob, 0);
    g.rotation.set(s.rotX + py * 0.12, s.rotY + px * 0.35 + (reducedMotion ? 0 : time * 0.06), 0);
    g.scale.setScalar(s.scale);

    if (lidPivot.current) lidPivot.current.rotation.x = -s.lid * 1.05;

    const pulse = reducedMotion ? 1 : 0.85 + Math.sin(time * 2) * 0.15;
    for (const m of glowMats.current) m.emissiveIntensity = (0.15 + s.glow * 1.6) * pulse;
    if (water.current) water.current.opacity = 0.25 + s.glow * 0.7;
    if (innerLight.current) innerLight.current.intensity = s.glow * 4 * pulse;
  });

  const shellMaterial = (
    <meshPhysicalMaterial color="#F5F6FA" roughness={0.22} metalness={0.05} clearcoat={1} clearcoatRoughness={0.15} />
  );

  return (
    <group ref={root}>
      {/* Base */}
      <mesh position={[0, -0.64, 0]} scale={[1, 1, 0.56]}>
        <cylinderGeometry args={[0.8, 0.9, 0.1, 64]} />
        <meshStandardMaterial color="#101D3A" roughness={0.5} metalness={0.4} />
      </mesh>

      {/* Casco inferior: exterior blanco + interior que brilla */}
      <mesh geometry={lower} scale={SHELL}>{shellMaterial}</mesh>
      <mesh geometry={lower} scale={[SHELL[0] * 0.97, SHELL[1] * 0.95, SHELL[2] * 0.95]}>
        <meshStandardMaterial ref={addGlow} side={THREE.BackSide} color="#C5D2EE" emissive="#7D8CFF" emissiveIntensity={0.4} roughness={0.4} />
      </mesh>

      {/* "Agua" luminosa */}
      <mesh position={[0, -0.14, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[SHELL[0] * 0.93, SHELL[2] * 0.9, 1]}>
        <circleGeometry args={[1, 96]} />
        <meshBasicMaterial ref={water} map={waterTexture} transparent opacity={0.4} depthWrite={false} toneMapped={false} />
      </mesh>

      {/* Borde iluminado */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={[SHELL[0], SHELL[2], 1]}>
        <torusGeometry args={[1, 0.022, 16, 160]} />
        <meshStandardMaterial ref={addGlow} color="#899BCB" emissive="#8E9BFF" emissiveIntensity={0.6} />
      </mesh>

      {/* Tapa con bisagra en la parte trasera */}
      <group ref={lidPivot} position={[0, 0, -SHELL[2]]}>
        <group position={[0, 0, SHELL[2]]}>
          <mesh geometry={upper} scale={[SHELL[0] * 1.015, 0.52, SHELL[2] * 1.02]}>{shellMaterial}</mesh>
          <mesh geometry={upper} scale={[SHELL[0] * 0.99, 0.5, SHELL[2] * 0.99]}>
            <meshStandardMaterial ref={addGlow} side={THREE.BackSide} color="#C5D2EE" emissive="#7D8CFF" emissiveIntensity={0.4} roughness={0.35} />
          </mesh>
        </group>
      </group>

      {/* Luz interior que se enciende al abrir la tapa */}
      <pointLight ref={innerLight} position={[0, 0.15, 0]} color="#8F9CFF" intensity={0} distance={4} decay={2} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/* Escena completa                                                     */
/* ------------------------------------------------------------------ */
export default function CapsuleScene({ progressRef, active = true }) {
  const pointerRef = useRef({ x: 0, y: 0 });
  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // Paralaje con el mouse (suavizado)
  useEffect(() => {
    const target = { x: 0, y: 0 };
    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    let raf;
    const tick = () => {
      pointerRef.current.x += (target.x - pointerRef.current.x) * 0.06;
      pointerRef.current.y += (target.y - pointerRef.current.y) * 0.06;
      raf = requestAnimationFrame(tick);
    };
    if (!reducedMotion) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(tick);
    }
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <Canvas
      frameloop={active ? "always" : "never"}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.35, 6], fov: 35 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <StudioEnvironment />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} color="#ffffff" />
      <directionalLight position={[-4, 2, -3]} intensity={1.4} color="#899BCB" />
      <StarField />
      <Capsule progressRef={progressRef} pointerRef={pointerRef} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
