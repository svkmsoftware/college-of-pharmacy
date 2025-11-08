"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";

/**
 * Three-row header:
 * 1) thin utility bar (top)
 * 2) white header with logo (middle)
 * 3) main dark navigation bar (bottom) with centered menu + dropdowns (open on click)
 *
 * Works without custom Tailwind colors; replace classes with your design tokens if needed.
 */

const NAV = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    children: [
      { name: "About SVKM", href: "/about-svkm" },
      { name: "About College of Pharmacy", href: "/college-of-pharmacy" },
      { name: "Governing Body", href: "/about/governing-body" },
      { name: "Best Practices", href: "/about/best-practice" },
      { name: "Distinctiveness", href: "/about/distinctiveness" },
    ],
  },
  {
    name: "Admissions",
    children: [
      { name: "Admission Approvals", href: "/admission/approvals" },
      { name: "Courses Offered", href: "/admission/courses" },
      { name: "B. Pharmacy", href: "/admission/BPharmacy" },
      { name: "Online Fees Payment", href: "/admission/courses" },
      { name: "Rules and Disciplin", href: "/admission/courses" },
      { name: "Admission Enquiry", href: "/admission/courses" },
      { name: "Scholarship", href: "/admission/courses" },
    ],
  },
  {
    name: "Academics",
    children: [
      { name: "Academic Calendar", href: "/academics/calendar" },
      { name: "Syllabus", href: "/academics/syllabus" },
    ],
  },
  { name: "Faculty", href: "/faculty" },
  { name: "Research", href: "/research" },
  { name: "Library", href: "/library" },
  { name: "News & Bulletin", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Close any open dropdown if clicked outside
  useEffect(() => {
    const handleDoc = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleDoc);
    return () => document.removeEventListener("mousedown", handleDoc);
  }, []);

  const toggleMenu = (name: string) =>
    setOpenMenu((prev) => (prev === name ? null : name));

  function MobileAccordion({ item }: { item: (typeof NAV)[number] }) {
    const [open, setOpen] = useState(false);

    // Collapse when any nested link is clicked
    const handleLinkClick = () => {
      setMobileOpen(false);
      setOpen(false);
    };

    return (
      <div className="border-b border-slate-800">
        {item.children ? (
          <>
            <button
              className="w-full text-left px-3 py-3 flex items-center justify-between"
              onClick={() => setOpen((s) => !s)}
            >
              <span className="text-sm font-medium">{item.name}</span>
              <ChevronDown
                size={16}
                className={`${open ? "rotate-180" : ""} transition-transform`}
              />
            </button>

            {open && (
              <div className="bg-slate-800">
                {item.children.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    className="block px-6 py-2 text-sm hover:bg-slate-700"
                    onClick={handleLinkClick} // 🔥 collapse after clicking
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href || "#"}
            className="block px-3 py-3 text-sm"
            onClick={handleLinkClick} // collapse if direct link too
          >
            {item.name}
          </Link>
        )}
      </div>
    );
  }

  return (
    <header ref={wrapperRef} className="w-full sticky top-0 z-50">
      {/* ---------- 2) Middle white header row with logo centered-left and CTAs to right ---------- */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-2">
            {/* Left: logo + title (logo placed slightly left of center like screenshot) */}
            <div className="flex items-center gap-3">
              {/* Replace /logo.png with your real logo in /public */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/svkm_logo.png"
                  alt="SVKM logo"
                  width={68}
                  height={68}
                  className="object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">
                    SVKM’s School of Pharmacy
                  </h2>
                </div>
              </div>
            </div>

            {/* Right: CTA buttons (UGC, Apply Now, Download Prospectus) */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 text-xs text-slate-700">
                <a href="#" className="hover:underline">
                  Faculty Directory
                </a>
                <span className="text-slate-300">|</span>
                <a href="#" className="hover:underline">
                  Alumni
                </a>
                <span className="text-slate-300">|</span>
                <a href="#" className="hover:underline">
                  Careers
                </a>
                <span className="text-slate-300">|</span>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="facebook"
                  className="text-slate-600 hover:text-amber-500"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="#"
                  aria-label="twitter"
                  className="text-slate-600 hover:text-amber-500"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="#"
                  aria-label="linkedin"
                  className="text-slate-600 hover:text-amber-500"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="#"
                  aria-label="instagram"
                  className="text-slate-600 hover:text-amber-500"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="#"
                  aria-label="youtube"
                  className="text-slate-600 hover:text-amber-500"
                >
                  <Youtube size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- 3) Bottom dark navigation bar (main menu) ---------- */}
      <nav className="bg-[#132347] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11">
            {/* Left spacer so center menu stays centered */}
            <div className="hidden lg:flex lg:flex-0" />

            {/* Center: main menu */}
            <div className="flex-2">
              <ul className="hidden lg:flex justify-center items-center space-x-8 text-sm font-medium">
                {NAV.map((item) => (
                  <li key={item.name} className="relative">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleMenu(item.name)}
                          className="flex items-center gap-1 px-2 py-1 hover:text-amber-400 transition"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={14}
                            className={`${
                              openMenu === item.name ? "rotate-180" : ""
                            } transition-transform`}
                          />
                        </button>

                        {openMenu === item.name && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-[#132347] text-white rounded-md shadow-lg overflow-hidden animate-fade">
                            {item.children.map((c) => (
                              <Link
                                key={c.name}
                                href={c.href}
                                className="block px-4 py-2 hover:bg-slate-700"
                                onClick={() => setOpenMenu(null)}
                              >
                                {c.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href || "#"}
                        className="px-2 py-1 hover:text-amber-400 transition"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile / tablet: small centered horizontal top then hamburger on right */}
              <div className="lg:hidden flex items-center justify-between">
                <div className="text-white font-semibold text-base">Menu</div>
                <button
                  onClick={() => setMobileOpen((s) => !s)}
                  className="p-2 rounded-md text-white hover:bg-slate-800/60"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>

            {/* Right spacer */}
            <div className="hidden lg:flex lg:flex-0" />
          </div>
        </div>

        {/* ---------- Mobile drawer (stacked) ---------- */}
        <div
          className={`lg:hidden bg-slate-900 text-white transition-[max-height] duration-200 overflow-hidden ${
            mobileOpen ? "max-h-[1200px]" : "max-h-0"
          }`}
        >
          <div className="px-4 py-4">
            {/* Utility area repeated for mobile */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="px-3 py-1 rounded-md text-xs bg-amber-400 text-slate-900 font-semibold"
                >
                  APPLY NOW
                </a>
                <a
                  href="#"
                  className="px-3 py-1 rounded-md text-xs border border-amber-400 text-amber-400"
                >
                  PROSPECTUS
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" aria-label="facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" aria-label="twitter">
                  <Twitter size={16} />
                </a>
                <a href="#" aria-label="linkedin">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Nav links accordion */}
            <div className="space-y-1">
              {NAV.map((item) => (
                <MobileAccordion key={item.name} item={item} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Small helper: mobile accordion ---------- */
