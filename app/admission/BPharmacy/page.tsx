import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import {
  GraduationCap,
  BookOpen,
  Users,
  Phone,
  Award,
  Briefcase,
  FileText,
  Download,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "B. Pharmacy Admissions",
  description:
    "Explore the B. Pharmacy program, intake, highlights, scholarships, and career opportunities at SVKM's College of Pharmacy, Shirpur.",
};

export default function page() {
  const scheduleData = [
    { activity: "Display of Vacant seats available", date: "09/09/2026" },
    { activity: "Last date of receiving application for Admission to Institute level", date: "10/09/2026" },
    { activity: "Display of Provisional merit list at Institute level", date: "11/09/2026" },
    { activity: "Submission of Grievances, if any", date: "12/09/2026 (upto 3:00 pm)" },
    { activity: "Display of final merit list", date: "12/09/2026 (upto 5:00 pm)" },
    { activity: "Reporting to the Institute & Confirmation of Admission", date: "13/09/2026 to 15/09/2026 (upto 5:00 pm)" },
    { activity: "Commencement of Classes for Institute Level Admissions", date: "15/09/2026" },
  ];

  return (
    <section className="bg-gray-50 text-[#132347]">
      {/* Hero Section */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Bachelor of Pharmacy (B. Pharm)"
        description="Empowering students with knowledge, innovation, and skills to excel in the world of pharmaceutical sciences."
      />

      {/* Dynamic Admission Notice & Schedule Section */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl overflow-hidden">
          {/* Section Header */}
          <div className="bg-[#132347] text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" /> Official Notice | Academic Year 2026-27
              </div>
              <h2 className="text-xl md:text-2xl font-bold">
                Direct Second Year B. Pharmacy Admission Schedule (Against CAP)
              </h2>
            </div>

            {/* Link to PDF Download */}
            <a
              href="/Against CAP Admission Schedule DSP B.Pharmacy A.Y.26-27.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#132347] font-bold px-5 py-2.5 rounded-full text-sm shadow-md transition shrink-0"
            >
              <Download className="w-4 h-4" />
              Download Schedule PDF
            </a>
          </div>

          {/* Schedule Table */}
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    <th className="py-3 px-4">Activity</th>
                    <th className="py-3 px-4 w-64">Schedule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {scheduleData.map((item, index) => (
                    <tr key={index} className="hover:bg-yellow-50/50 transition">
                      <td className="py-3.5 px-4 font-medium text-gray-800">{item.activity}</td>
                      <td className="py-3.5 px-4 font-semibold text-[#132347] whitespace-nowrap">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enquiry Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-600 gap-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span>Contacts: <strong>7588054156</strong>, <strong>7499488334</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-yellow-500" />
                <span>Email: <strong>Cop.shirpur@svkm.ac.in</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {[
          {
            icon: GraduationCap,
            title: "Course",
            desc: "B. Pharmacy (Choice Code: 0566482310)",
          },
          { icon: Users, title: "Intake", desc: "100 Students" },
          {
            icon: Phone,
            title: "Admission Enquiry",
            desc: "+91 7588054156 / +91 7499488334",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex justify-center mb-3">
              <item.icon className="w-10 h-10 text-yellow-500 bg-[#132347]/10 p-2 rounded-full" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Overview */}
      <div className="bg-white py-16 border-t border-b">
        <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Bachelor of Pharmacy (B. Pharm) program is a four-year
            undergraduate course that provides students with comprehensive
            knowledge of pharmaceutical sciences, drug formulation, research
            methodologies, and healthcare practices. The program is designed to
            prepare graduates for careers in the pharmaceutical industry,
            clinical research, community pharmacy, and higher education.
          </p>
        </div>
      </div>

      {/* Curriculum / Program Highlights */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Program Highlights
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Comprehensive Curriculum",
              desc: "Covers Pharmaceutics, Pharmacology, Pharmacognosy, and Pharmaceutical Chemistry.",
            },
            {
              icon: Award,
              title: "Industry Exposure",
              desc: "Regular industrial visits, expert talks, and practical training sessions.",
            },
            {
              icon: Briefcase,
              title: "Research Focus",
              desc: "Hands-on training in analytical instruments and formulation development.",
            },
            {
              icon: Users,
              title: "Student Development",
              desc: "Seminars, conferences, and soft-skill development programs.",
            },
            {
              icon: GraduationCap,
              title: "Career Guidance",
              desc: "Placement support for pharmaceutical companies, hospitals, and higher studies.",
            },
            {
              icon: BookOpen,
              title: "Modern Library",
              desc: "Digital library access with journals, e-books, and Turnitin plagiarism facility.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <item.icon className="w-10 h-10 text-yellow-500 bg-[#132347]/10 p-2 rounded-full mb-3" />
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scholarship Section */}
      <div className="bg-[#132347] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Scholarship & Financial Assistance
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-6">
            All types of Government scholarships are available. Free education
            is provided to all eligible girls as per the rules and regulations
            of the Government of Maharashtra.
          </p>
          <p className="text-yellow-400 font-medium">
            For details, contact the admission office.
          </p>
        </div>
      </div>

      {/* Career Opportunities */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Career Opportunities
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            "Pharmaceutical Industry",
            "Clinical Research Organizations",
            "Community & Hospital Pharmacy",
            "Regulatory Affairs",
            "Quality Assurance / Control",
            "Higher Studies (M. Pharm, MBA, etc.)",
          ].map((career, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 font-medium">{career}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
