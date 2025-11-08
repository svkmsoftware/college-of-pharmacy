import Affiliations from "@/components/Affiliations";
import CollegeVideo from "@/components/CollegeVideo";
import HeroCarousel from "@/components/HeroCarousel";
import InfrastructureGallery from "@/components/photoGallery";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <VisionMission />
      <Affiliations />
      <CollegeVideo />
      <InfrastructureGallery />
    </>
  );
}
