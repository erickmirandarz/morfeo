import { Josefin_Sans, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroCloud from "@/components/IntroCloud";
import { site } from "@/data/content";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata = {
  title: site.fullName,
  description: site.description,
};

export const viewport = {
  themeColor: "#050D22",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${outfit.variable} ${josefin.variable}`} suppressHydrationWarning>
      <head>
        {/* Decide antes de pintar si se muestra la nube de entrada (una vez por sesión) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var h=document.documentElement;if(sessionStorage.getItem('morfeo-intro-visto'))h.classList.add('intro-done');else h.classList.add('intro-active')}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <IntroCloud />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
