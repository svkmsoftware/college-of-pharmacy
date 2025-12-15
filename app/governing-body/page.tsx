import PageHero from "@/components/PageHero";

export default function GoverningBodyPage() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Governing Body"
      />

      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 space-y-12">

          {/* College Development Committee */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-sky-900 border-l-4 border-sky-900 pl-3 mb-6">
              College Development Committee
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-[900px] w-full border border-gray-200">
                <thead className="bg-sky-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Sr. No.
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Name of Person
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Position
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["1", "Shri. Bhupesh R. Patel", "Chairman", "Chairperson of the management or his nominee"],
                    ["2", "Shri. Chintan A. Patel", "Member", "Secretary of the management or his nominee"],
                    ["3", "Shri. Rajgopal Bhandari", "Member", "Local members from education, industry & social service"],
                    ["4", "Ms. Resha Patel", "Member", "-"],
                    ["5", "Shri. Prashant Goyal", "Member", "-"],
                    ["6", "Dr. Sameer Goyal", "Member", "-"],
                    ["7", "Ms. Aishwarya Jain", "Member", "Head of Department nominee"],
                    ["8", "Dr. Pankaj Pal", "Member", "Teaching faculty nominee"],
                    ["9", "Dr. Krishna Swaroop Akey", "Member", "-"],
                    ["10", "Ms. Mohini Tayade", "Member", "-"],
                    ["11", "CA. Atul Patwari", "Member", "Non-teaching employee representative"],
                    ["12", "Dr. Vivekkumar K. Redasani", "Secretary", "Principal of the Institute"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-50 hover:bg-sky-50 transition"
                    >
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className="px-4 py-3 text-sm text-gray-700"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500 italic">
              (Ref: Maharashtra Public Universities Act 2016, Section 97)
            </p>
          </div>

          {/* Board of Governors */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-sky-900 border-l-4 border-sky-900 pl-3 mb-6">
              Board of Governors
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-[1000px] w-full border border-gray-200">
                <thead className="bg-sky-900 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Sr. No.
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Name of Member
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Position
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Appointed By
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["1", "Shri. Amrish R. Patel", "Chairman", "Society", "Entrepreneur & Industrialist"],
                    ["2", "Shri. Bhupesh R. Patel", "Member", "Society", "Entrepreneur & Industrialist"],
                    ["3", "Shri. Chintan A. Patel", "Member", "Society", "Entrepreneur & Industrialist"],
                    ["4", "Shri. Rajgopal Bhandari", "Member", "Society", "Entrepreneur & Educationist"],
                    ["5", "Dr. Harshdeep Joshi", "Member", "University", "University Nominee"],
                    ["6", "DTE Nominee", "Member", "State Government", "Ex-officio"],
                    ["7", "Dr. Vivekkumar Redasani", "Member Secretary", "Society", "Principal of the Institute"],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="odd:bg-white even:bg-gray-50 hover:bg-sky-50 transition"
                    >
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className="px-4 py-3 text-sm text-gray-700"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-500 italic">
              (Ref: AICTE Approval Process Handbook 2024–25, Appendix-17)
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
