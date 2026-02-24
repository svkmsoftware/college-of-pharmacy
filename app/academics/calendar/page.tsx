import React from "react";
import { FileText, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Calendar",
  description:
    "View and download institute and university academic calendars for SVKM's College of Pharmacy, Shirpur.",
};

const page = () => {
  return (
    <>
      <PageHero
        bannerImage={"/images/page_banner.png"}
        pageTitle="Academic Calendar"
      />

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Page Title */}

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Institute Calendar */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-sky-900" />
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Academic Calendar – Institute
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Official academic schedule released by the Institute for the
                current academic year.
              </p>

              <a
                href="/docs/Add_academic_calendar_of_Institute.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-sky-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-800 transition"
              >
                <FileText className="h-4 w-4" />
                View / Download PDF
              </a>
            </div>

            {/* University Calendar */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 text-center">
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-sky-900" />
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Academic Calendar – University
              </h2>

              <p className="text-sm text-gray-600 mb-6">
                Academic calendar issued by the University applicable to all
                affiliated institutes.
              </p>

              <a
                href="/docs/Add_academic_calendar_of_university.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 bg-sky-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-800 transition"
              >
                <FileText className="h-4 w-4" />
                View / Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
