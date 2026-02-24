import PageHero from "@/components/PageHero";
import type { Metadata } from "next";
import {
  MonitorSmartphone,
  Users,
  Factory,
  ClipboardCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Practices",
  description:
    "Explore institutional best practices at SVKM's College of Pharmacy, Shirpur, including teaching innovation, mentoring, and quality assurance.",
};

const practices = [
  {
    id: "01",
    title: "Teaching–Learning Innovations",
    icon: MonitorSmartphone,
    points: [
      "Smart classrooms with ICT-enabled teaching",
      "PPT-enabled lectures and audiovisual learning aids",
      "Blended learning using LMS and digital platforms",
      "Student-centric and outcome-based teaching approaches",
    ],
  },
  {
    id: "02",
    title: "Mentoring & Student Support",
    icon: Users,
    points: [
      "Structured mentor–mentee system for academic monitoring",
      "Remedial classes for slow and weak learners",
      "Bridge courses for strengthening basic concepts",
      "Counseling and emotional support for students",
    ],
  },
  {
    id: "03",
    title: "Industry Interaction & Exposure",
    icon: Factory,
    points: [
      "Guest lectures by pharmaceutical industry experts",
      "Industrial visits to manufacturing and research units",
      "Internships and hands-on industry exposure",
      "MoUs with industries and skill development workshops",
    ],
  },
  {
    id: "04",
    title: "Quality Assurance Practices",
    icon: ClipboardCheck,
    points: [
      "Structured student feedback system",
      "Parent feedback for academic improvement",
      "Periodic academic audits and reviews",
      "Continuous quality enhancement initiatives",
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Best Practices"
        description="Institutional practices adopted to enhance academic excellence, student development, and quality assurance."
      />

      {/* Practices */}
      <section className="bg-gray-50 py-20 text-[#132347]">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {practices.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-3 gap-10 items-start ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Panel */}
              <div className="md:col-span-1">
                <div className="sticky top-28">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold text-gray-300">
                      {item.id}
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#132347]/10">
                      <item.icon className="text-[#132347]" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold leading-snug">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Right Panel */}
              <div className="md:col-span-2 bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                <ul className="space-y-3 text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#132347]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
