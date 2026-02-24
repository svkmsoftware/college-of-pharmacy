import type { Metadata } from "next";
import Affiliations from "@/components/Affiliations";
import CollegeVideo from "@/components/CollegeVideo";
import HeroCarousel from "@/components/HeroCarousel";
import InfrastructureGallery from "@/components/photoGallery";
import VisionMission from "@/components/VisionMission";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Official website of SVKM's College of Pharmacy, Shirpur. Explore academics, admissions, campus facilities, and institutional updates.",
};

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
