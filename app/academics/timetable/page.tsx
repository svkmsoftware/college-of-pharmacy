import React from "react";
import { Download, CalendarDays } from "lucide-react";
import PageHero from "@/components/PageHero";

const page = () => {
  return (
    <>
      <PageHero
        bannerImage={"/images/page_banner.png"}
        pageTitle="Time Table"
      />

      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            {/* Download Button */}
            <div className="flex justify-end mb-4">
              <a
                href="/docs/timetable.pdf"
                download
                className="inline-flex items-center gap-2 bg-sky-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-800 transition"
              >
                <Download className="h-4 w-4" />
                Download Time Table (PDF)
              </a>
            </div>

            {/* Embedded PDF */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/docs/timetable.pdf"
                className="w-full h-[75vh]"
                title="Institute Time Table"
              />
            </div>

            {/* Note */}
            <p className="mt-4 text-sm text-gray-500 italic text-center">
              Note: If the timetable is not visible, please use the download
              button above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
