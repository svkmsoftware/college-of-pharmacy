"use client";

import PageHero from "@/components/PageHero";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const newsData = [
  {
    title:
      "Ganesh Chaturthi Celebration at SVKM's College of Agriculture and College of Pharmacy",
    description:
      "SVKM's College of Agriculture and College of Pharmacy, Shirpur, jointly celebrated Ganesh Utsav 2026 with great devotion and enthusiasm. The celebration included the installation of Lord Ganesha's idol, traditional rituals, Vedic chanting, worship, and aarti in the presence of principals, faculty members, staff, and students. The event emphasized Indian cultural heritage, traditional values, unity, and the holistic development of students. The celebration was featured in Punya Nagari newspaper.",
    pdf: "/images/news/News_Ganapati_19102026.jpg",
    image: "/images/news/News_Ganapati_19102026.jpg",
    date: "17 September 2026",
    isLatest: true,
  },
  {
    title: "International Yoga Day Celebration Featured in Punya Nagari",
    description:
      "SVKM's College of Pharmacy, Shirpur celebrated International Yoga Day with enthusiastic participation from students and faculty members. The session included various yoga asanas, pranayama, meditation, and breathing exercises aimed at promoting physical fitness, mental well-being, and a healthy lifestyle. The event highlighted the importance of incorporating yoga into daily life and was featured in Punya Nagari newspaper.",
    pdf: "/images/news/yoga_day_18072026.jpeg",
    image: "/images/news/yoga_day_18072026.jpeg",
    date: "25 June 2026",
  },
  {
    title:
      "Cultural Festival and Prize Distribution Ceremony Featured in Punya Nagari",
    description:
      "SVKM's College of Pharmacy, Shirpur organized its Annual Cultural Festival and Prize Distribution Ceremony with great enthusiasm. Students showcased their talents through cultural performances, Bollywood-themed events, and various competitions, demonstrating creativity, teamwork, and confidence. Outstanding performers were felicitated during the ceremony, and the event was featured in Punya Nagari newspaper.",
    pdf: "/images/news/cultural_day_18072026.jpeg",
    image: "/images/news/cultural_day_18072026.jpeg",
    date: "23 June 2026",
  },
  {
    title:
      "World Environment Day – No Fire Cooking Challenge Featured in Lokmat",
    description:
      "SVKM's College of Pharmacy, Shirpur organized a 'No Fire Cooking Challenge' on the occasion of World Environment Day to create awareness about environmental conservation. More than 50 students participated enthusiastically and presented innovative, nutritious, and eco-friendly dishes prepared without using gas or electricity. The event was covered by Lokmat newspaper.",
    pdf: "/images/news/world_environment_day_lokmat.jpg",
    image: "/images/news/world_environment_day_lokmat.jpg",
    date: "10 June 2026",
  },
  {
    title:
      "World Environment Day – No Fire Cooking Challenge Featured in Punya Nagari",
    description:
      "SVKM's College of Pharmacy, Shirpur successfully conducted a 'No Fire Cooking Challenge' on World Environment Day to promote sustainable and eco-friendly practices among students. The competition encouraged healthy food preparation without using conventional energy sources and received coverage in Punya Nagari newspaper.",
    pdf: "/images/news/world_environment_day_punyaNagari.jpg",
    image: "/images/news/world_environment_day_punyaNagari.jpg",
    date: "10 June 2026",
  },
  {
    title:
      "SVKM's College of Pharmacy Students Selected for National E-Yuva Fellowship",
    description:
      "Students of SVKM's College of Pharmacy, Shirpur achieved national recognition through the prestigious E-Yuva Fellowship program. Their research project focuses on developing a novel biodegradable film using ginger and pteridoxime extracts for market-ready nutraceutical applications, showcasing innovation and research excellence.",
    pdf: "/images/news/paper_news-EYuva_29052026.jpeg",
    image: "/images/news/paper_news-EYuva_29052026.jpeg",
    date: "16 May 2026",
  },
  {
    title: "Industrial Visit by SVKM's College of Pharmacy Students",
    description:
      "Students of SVKM's College of Pharmacy, Shirpur participated in an industrial visit to gain practical exposure to pharmaceutical manufacturing, packaging, and quality control processes.",
    pdf: "/docs/news/industrial_report_06052026.pdf",
    image: "/images/news/industrial_report_06052026.jpeg",
    date: "06 May 2026",
  },
  {
    title:
      "Students Serving first-aid service at Nageshwar temple on the auspicious occasion of Mahashivratri",
    description:
      "SVKM’s College of Pharmacy students conducted a social service activity at Nageshwar Temple on the occasion of Mahashivratri, showing their commitment to society.",
    pdf: "/images/news/student_serving_first_aid_service_at_nageshwar_temple_2.jpg",
    image:
      "/images/news/student_serving_first_aid_service_at_nageshwar_temple.jpg",
    date: "26 February 2026",
  },
  {
    title: "Parents-Teachers Meet",
    description:
      "Shri Vile Parle Kelavani Mandal's College of Pharmacy, Shirpur, held a successful meeting on January 24, 2026, to discuss student progress.",
    pdf: "/docs/news/parent_teacher_meet_24012026.pdf",
    image: "/images/news/parent_teacher_meet_24012026.jpeg",
    date: "24 January 2026",
  },
  {
    title: "Republic Day 2026",
    description:
      "The institution celebrated the 77th Republic Day on January 26, 2026 with a flag-hoisting ceremony and patriotic cultural activities.",
    pdf: "/docs/news/republic_day_26012026.pdf",
    image: "/images/news/republic_day_26012026.jpeg",
    date: "26 January 2026",
  },
  {
    title: "Faculty Achievement",
    description:
      "Dr. Aishwarya Jain won 1st prize at the 74th Indian Pharmaceutical Congress for nano-formulation research.",
    pdf: "/images/news/faculty_achievement.png",
    image: "/images/news/faculty_achievement.png",
    date: "28 December 2025",
  },
  {
    title: "150 Years of Vande Mataram",
    description:
      "SVKM's College of Pharmacy celebrated the 150th Anniversary of Vande Mataram.",
    pdf: "/docs/news/vande_matram.pdf",
    image: "/images/news/vande_matram.jpg",
    date: "07 November 2025",
  },
  {
    title: "Udaan - Induction Program for First Year B.Pharmacy",
    description:
      "The induction program for first-year B.Pharmacy students was successfully conducted.",
    pdf: "/docs/news/induction_program.pdf",
    image: "/images/news/induction_program.jpg",
    date: "19 November 2025",
  },
  {
    title: "Student Orientation Program",
    description:
      "The Student Orientation Program introduced newly admitted students to the curriculum.",
    pdf: "/docs/news/orientation_program.pdf",
    image: "/images/news/orientation_program.jpg",
    date: "22 May 2025",
  },
  {
    title: "National Pharmacy Week",
    description:
      "National Pharmacy Week (NPW) 2025 was celebrated with various academic and awareness activities.",
    pdf: "/docs/news/national_pharmacy_week.pdf",
    image: "/images/news/national_pharmacy_week.jpg",
    date: "22 November 2025",
  },
  {
    title: "College of Pharmacy Celebrates Librarian Day",
    description:
      "SVKM's College of Pharmacy and College of Agriculture, Tardi, jointly celebrated Librarian Day to mark the birth anniversary of Dr. S.R. Ranganathan. Principal Dr. Vivekkumar Redasani spoke on the importance of libraries and the need to maintain reading habits in the digital age. The college also introduced a QR-code based system to help students easily access the library's educational and digital resources. The event was featured in Punya Nagari newspaper.",
    pdf: "/images/news/librarian_day_15082026.jpg",
    image: "/images/news/librarian_day_15082026.jpg",
    date: "15 August 2026",
  },
  {
    title: "National Sports Day Celebrated with Enthusiasm",
    description:
      "SVKM's College of Pharmacy, Tardi, celebrated National Sports Day with great enthusiasm through various sports and fitness activities. Students participated actively, inspired by the life and sporting achievements of Major Dhyan Chand. Director of Physical Education Kuldeep Yadav guided the students, and Principal Dr. Vivekkumar Redasani extended his wishes on the occasion. The event was featured in Punya Nagari newspaper (Dhule edition).",
    pdf: "/images/news/sports_day_02092026.jpg",
    image: "/images/news/sports_day_02092026.jpg",
    date: "02 September 2026",
  },
];

const ITEMS_PER_PAGE = 9;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort news by newest date
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = sortedNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Latest News & Bulletins"
        description="Stay updated with the latest announcements and notices"
      />

      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedNews.map((news, index) => (
              <div
                key={startIndex + index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Latest badge */}
                  {news.isLatest && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
                      Latest
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded w-fit mb-3">
                    {news.date}
                  </span>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    {news.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={news.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-900 font-medium text-sm hover:underline"
                    >
                      View More
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`h-9 w-9 rounded-md text-sm font-medium transition ${
                      page === currentPage
                        ? "bg-sky-900 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
