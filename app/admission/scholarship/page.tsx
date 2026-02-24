import PageHero from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships",
  description:
    "Learn about scholarship and concession schemes available for eligible students at SVKM's College of Pharmacy, Shirpur.",
};

export default function Page() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Scholarships"
        description="Financial assistance and scholarship schemes available for eligible and deserving students."
      />

      {/* Content Section */}
      <section className="bg-gray-50 py-16 text-[#132347]">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {/* Intro */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-4">
              SVKM COP offers scholarships to meritorious and deserving students
              under the following categories:
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <span className="font-semibold text-gray-900">
                  Government Scholarships:
                </span>{" "}
                As per eligibility under State and Central Government schemes.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Institute Scholarships:
                </span>{" "}
                Based on academic performance, sports achievements, or financial
                need.
              </li>
            </ul>
          </div>

          {/* Table Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">
              Concession Scheme Details
            </h2>
            <p className="text-gray-600">
              Details of various scholarship and freeship schemes available to
              students.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
            <table className="min-w-full border-collapse text-sm">
              <thead className="bg-[#132347] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Sr. No.</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">Income Limit</th>
                  <th className="px-4 py-3 text-left">
                    Applying Authority / Department
                  </th>
                  <th className="px-4 py-3 text-left">
                    Scheme Name (Form Fill Scheme)
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">ST (Scholarship)</td>
                  <td className="px-4 py-3">Up to ₹2.5 Lakh</td>
                  <td className="px-4 py-3">Tribal Development</td>
                  <td className="px-4 py-3">
                    Government of India Post-Matric Scholarship
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">ST (Freeship)</td>
                  <td className="px-4 py-3">Above ₹2.5 Lakh</td>
                  <td className="px-4 py-3">Tribal Development</td>
                  <td className="px-4 py-3">
                    Tuition & Examination Fee (Freeship)
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">3</td>
                  <td className="px-4 py-3">SC (Scholarship)</td>
                  <td className="px-4 py-3">Up to ₹2 Lakh</td>
                  <td className="px-4 py-3">
                    Social Justice & Special Assistance
                  </td>
                  <td className="px-4 py-3">
                    Government of India Post-Matric Scholarship
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3">SC (Freeship)</td>
                  <td className="px-4 py-3">Above ₹2 Lakh</td>
                  <td className="px-4 py-3">
                    Social Justice & Special Assistance
                  </td>
                  <td className="px-4 py-3">
                    Post-Matric Tuition Fee and Examination Fee
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">5</td>
                  <td className="px-4 py-3">
                    OBC / VJ / NT / SBC (Scholarship)
                  </td>
                  <td className="px-4 py-3">₹1 Lakh to ₹8 Lakh</td>
                  <td className="px-4 py-3">
                    VJNT, OBC and SBC Welfare Department
                  </td>
                  <td className="px-4 py-3">
                    Government of India Post-Matric Scholarship
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3">OBC / VJ / NT / SBC (Freeship)</td>
                  <td className="px-4 py-3">₹1 Lakh to ₹8 Lakh</td>
                  <td className="px-4 py-3">
                    VJNT, OBC and SBC Welfare Department
                  </td>
                  <td className="px-4 py-3">
                    Post-Matric Tuition Fee and Examination Fee
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">7</td>
                  <td className="px-4 py-3">EBC (OPEN)</td>
                  <td className="px-4 py-3">Up to ₹2.5 Lakh</td>
                  <td className="px-4 py-3">
                    Directorate of Technical Education (DTE)
                  </td>
                  <td className="px-4 py-3">
                    Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk
                    Shishyavrutti Yojana
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">8</td>
                  <td className="px-4 py-3">EBC (OPEN)</td>
                  <td className="px-4 py-3">₹2.5 Lakh to ₹8 Lakh</td>
                  <td className="px-4 py-3">
                    Directorate of Technical Education (DTE)
                  </td>
                  <td className="px-4 py-3">
                    Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk
                    Shishyavrutti Yojana
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3">9</td>
                  <td className="px-4 py-3">Minority</td>
                  <td className="px-4 py-3">Up to ₹6 Lakh</td>
                  <td className="px-4 py-3">Minority Development Department</td>
                  <td className="px-4 py-3">
                    Scholarship for Students of Minority Communities Pursuing
                    Higher and Professional Courses (DTE)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="text-sm text-gray-600 bg-white p-6 rounded-xl border border-gray-100">
            <strong>Note:</strong> Students are advised to regularly check
            official Government portals and complete the scholarship application
            process within the prescribed timelines to avail the benefits.
          </div>
        </div>
      </section>
    </>
  );
}
