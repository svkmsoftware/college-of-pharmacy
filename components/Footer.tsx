"use client";

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#132347] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">SVKM College of Pharmacy</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Committed to academic excellence and cutting-edge research in pharmaceutical sciences,
              nurturing the next generation of healthcare leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
              <li><Link href="/admission" className="hover:text-yellow-500 transition">Admissions</Link></li>
              <li><Link href="/academics" className="hover:text-yellow-500 transition">Academics</Link></li>
              <li><Link href="/faculty" className="hover:text-yellow-500 transition">Faculty</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/library" className="hover:text-yellow-500 transition">Library</Link></li>
              <li><Link href="/research" className="hover:text-yellow-500 transition">Research</Link></li>
              <li><Link href="/news" className="hover:text-yellow-500 transition">News & Bulletin</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-yellow-500 mt-1" />
                <span>SVKM College of Pharmacy, Vile Parle (W), Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-500" />
                <span>+91 22 4233 9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-500" />
                <span>info@svkmcop.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex gap-5">
            <Link href="#" className="hover:text-yellow-500 transition"><Facebook size={18} /></Link>
            <Link href="#" className="hover:text-yellow-500 transition"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-yellow-500 transition"><Linkedin size={18} /></Link>
            <Link href="#" className="hover:text-yellow-500 transition"><Youtube size={18} /></Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} SVKM College of Pharmacy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
