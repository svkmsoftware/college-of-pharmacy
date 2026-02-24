import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules and Discipline",
  description:
    "Review discipline guidelines, code of conduct, and related student policy updates at SVKM's College of Pharmacy, Shirpur.",
};

export default function Page() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Content Coming Soon"
        description="We are currently updating this section. Please check back soon."
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900">
              This Page Is Under Development
            </h2>

            <p className="leading-relaxed">
              The content for this page is currently being prepared and will be
              updated shortly. We appreciate your patience and request you to
              visit this page again.
            </p>

            <p className="text-sm text-gray-500">
              For any urgent queries, please contact the institute office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
