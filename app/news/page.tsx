import PageHero from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";

const newsData = [
  {
    title: "150 Years of Vande Mataram",
    description:
      "Shri Vile Parle Kelvani Mandal's College of Pharmacy, Tardi, Shirpur, celebrated the 150th Anniversary of Vande Mataram on 7th November 2025.",
    pdf: "/docs/news/vande_matram.pdf",
    image: "/images/news/vande_matram.jpg",
    date: "07 November 2025",
  },
  {
    title: "Udaan - Induction Program for First Year B.Pharmacy",
    description:
      "Induction program of Shri Vile Parle Kelvani Mandal's College of Pharmacy, Shirpur was successfully conduncted on 19th November 2025.",
    pdf: "/docs/news/induction_program.pdf",
    image: "/images/news/induction_program.jpg",
    date: "19 November 2025",
  },
  {
    title: "Student Orientation Program at SVKM's College of Pharmacy",
    description:
      "The Student Orientation Program was organized to introduce the newly admitted students and to make them aware the curriculum.",
    pdf: "/docs/news/orientation_program.pdf",
    image: "/images/news/orientation_program.jpg",
    date: "22 May 2025",
  },
  {
    title: "National Pharmacy Week",
    description:
      "National Pharmacy Week (NPW) 2025 was celebrated at Shri Vile Parle Kelvani Mandal's College of Pharmacy.",
    pdf: "/docs/news/national_pharmacy_week.pdf",
    image: "/images/news/national_pharmacy_week.jpg",
    date: "22 November 2025",
  },
];

const page = () => {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Latest News & Bulletins"
        description="Stay updated with the latest announcements and notices"
      />

      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-gray-500 mb-2">{news.date}</p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {news.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6">
                    {news.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={news.pdf}
                      target="_blank"
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
        </div>
      </section>
    </>
  );
};

export default page;
