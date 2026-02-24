import { Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syllabus",
  description:
    "Access and download the latest syllabus for programs at SVKM's College of Pharmacy, Shirpur.",
};

const page = () => {
  return (
    <>
      <PageHero
        bannerImage={"/images/page_banner.png"}
        pageTitle="Syllabus"
      />
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">

          {/* Content Card */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {/* Download Button */}
            <div className="flex justify-end mb-4">
              <a
                href="/docs/syllabus.pdf"
                download
                className="inline-flex items-center gap-2 bg-sky-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-800 transition"
              >
                <Download className="h-4 w-4" />
                Download Syllabus (PDF)
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/docs/syllabus.pdf"
                title="Institute Syllabus"
                className="w-full h-[75vh]"
              />
            </div>

            {/* Helper Text */}
            <p className="mt-4 text-sm text-gray-500 italic text-center">
              Note: If the syllabus does not display correctly, please download
              the PDF using the button above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
