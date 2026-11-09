import PageHeader from "@/components/PageHeader";
import VideoGallery from "@/components/VideoGallery";
import { videos } from "@/data/content";

export const metadata = {
  title: "Videos",
  description: videos.subtitle,
};

export default function VideosPage() {
  return (
    <>
      <PageHeader icon="play" eyebrow="Demostraciones" title={videos.title} subtitle={videos.subtitle} />
      <VideoGallery />
    </>
  );
}
