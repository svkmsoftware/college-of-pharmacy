import PageHero from "@/components/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function ContactUs() {
  return (
    <>
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Contact Us"
        description="Meet our experienced teaching team — committed to teaching,
              research, and student mentorship."
      />
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Contact Info + Form (optional for later) */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#132347] mb-6">
                Get in Touch
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <MapPin className="text-yellow-500 w-6 h-6" />
                  <span className="text-gray-700">
                    Admin Office – SVKM’s College of Pharmacy, Shirpur
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-yellow-500 w-6 h-6" />
                  <a
                    href="tel:7588054156"
                    className="text-gray-700 hover:text-[#132347] transition"
                  >
                    7588054156
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-yellow-500 w-6 h-6" />
                  <a
                    href="mailto:info@svkmcop.edu.in"
                    className="text-gray-700 hover:text-[#132347] transition"
                  >
                    info@svkmcop.edu.in
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-[#132347] mb-4">
                  Connect with Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/SvkmCopShirpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#132347] hover:bg-yellow-500 text-white p-3 rounded-full transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/svkmcop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#132347] hover:bg-yellow-500 text-white p-3 rounded-full transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/svkm-cop-6ba521389"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#132347] hover:bg-yellow-500 text-white p-3 rounded-full transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/svkmcop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#132347] hover:bg-yellow-500 text-white p-3 rounded-full transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                title="SVKM College of Pharmacy Shirpur"
                src="https://www.google.com/maps?q=SVKM+College+of+Pharmacy+Shirpur&output=embed"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
