import PageHero from "@/components/PageHero";

export default function Page() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Scholarship"
        description="Facilitating access to government scholarships and financial support for eligible students."
      />

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The institute supports and facilitates students in availing
              various scholarship schemes offered by the Government, subject
              to eligibility and prevailing rules.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                All types of{" "}
                <span className="font-semibold text-gray-900">
                  Government Scholarships
                </span>{" "}
                are available for eligible students as per government norms.
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Free Education
                </span>{" "}
                is provided to all eligible{" "}
                <span className="font-semibold text-gray-900">
                  girl students
                </span>{" "}
                as per the rules and regulations of the{" "}
                <span className="font-semibold text-gray-900">
                  Government of Maharashtra
                </span>.
              </li>
            </ul>

            <p>
              Students are advised to regularly follow official notifications
              and complete the scholarship application process within the
              stipulated timelines to avail the benefits.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
