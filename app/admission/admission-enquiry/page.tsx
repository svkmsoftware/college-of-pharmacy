import PageHero from "@/components/PageHero";
import { PhoneCall } from "lucide-react";

export default function Page() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Admission Enquiry"
        description="For admission-related queries, eligibility, and application details."
      />

      <section className="bg-gray-50 py-20 text-[#132347]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white border border-gray-100 rounded-xl p-10 text-center shadow-sm hover:shadow-md transition">
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#132347]/10 text-[#132347]">
                <PhoneCall size={30} />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-3">
              Admission Enquiry Helpline
            </h2>

            {/* Description */}
            <p className="text-gray-700 max-w-xl mx-auto mb-6">
              For information regarding admissions, eligibility criteria,
              scholarships, or the application process, please contact our
              admission office.
            </p>

            {/* Phone Highlight */}
            <a
              href="tel:+917588054156"
              className="
                inline-flex items-center gap-3
                bg-[#132347] text-white
                px-8 py-4 rounded-lg
                text-3xl font-semibold
                shadow-md
                hover:bg-[#0f1c36]
                transition
              "
            >
              <PhoneCall className="w-7 h-7 text-yellow-400" />
              +91 75880 54156
            </a>

          </div>
        </div>
      </section>
    </>
  );
}
