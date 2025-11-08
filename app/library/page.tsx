"use client";

import PageHero from "@/components/PageHero";
import { Clock, LandPlot, LibraryBig, Users } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-700">
      {/* Hero */}
      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Library"
        description="Meet our experienced teaching team — committed to teaching,
              research, and student mentorship."
      />

      {/* Library at a Glance */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* <h2 className="font-heading text-2xl md:text-3xl text-[#132347] font-bold mb-8">
          Library at a Glance
        </h2> */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#132347] mb-4 relative inline-block ">
            At a Glance
            <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We are proud to be affiliated with recognized academic and
            regulatory bodies that ensure quality education and uphold
            professional standards in pharmaceutical sciences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: "Librarian",
              value: "Mr. Hemant Bawa",
              icon: <LibraryBig />,
            },
            { label: "Area (in Sqm)", value: "373.93", icon: <LandPlot /> },
            { label: "Reading Room Capacity", value: "90", icon: <Users /> },
            {
              label: "Library Timing",
              value: "09.00 AM To 06.00 PM",
              icon: <Clock />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md p-6 transition flex gap-4 items-center"
            >
              <div className="p-4 bg-gradient-to-br from-[#0b3d5b] via-[#146e8a] to-[#17a2b8] rounded-full w-fit mb-5 text-white shadow-md">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-lg font-heading text-[#132347] font-semibold mt-1">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Library Services */}
      <section className="bg-white border-t border-b py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#132347] mb-4 relative inline-block ">
              Library Services
              <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              We are proud to be affiliated with recognized academic and
              regulatory bodies that ensure quality education and uphold
              professional standards in pharmaceutical sciences.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Circulation (Book, Periodical: Issue, Return and Renew)",
              "OPAC (Online Public Access Catalogue)",
              "Plagiarism check facility (Turnitin)",
              "Library new arrivals",
              "Article alert service",
              "Reference service",
              "Reprography Facility",
              "Scanning service",
              "Digital Library service",
              "QR Code (Quick Response Code)",
              "Reading Room",
              "Current Awareness Service",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 hover:bg-[#132347]/5 border border-gray-100 rounded-lg p-4 transition"
              >
                <p className="text-sm font-medium text-[#132347]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-heading text-2xl md:text-3xl text-[#132347] font-bold mb-8">
          Books Collection
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl border border-gray-200 text-sm">
            <thead className="bg-[#132347] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Titles</th>
                <th className="px-6 py-3 text-left">Volumes</th>
                <th className="px-6 py-3 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-6 py-3 font-medium">Books</td>
                <td className="px-6 py-3">512</td>
                <td className="px-6 py-3">2104</td>
                <td className="px-6 py-3">2616</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-6 py-3 font-medium">E-books</td>
                <td className="px-6 py-3">502</td>
                <td className="px-6 py-3">502</td>
                <td className="px-6 py-3">1004</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Journals Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="font-heading text-2xl md:text-3xl text-[#132347] font-bold mb-8">
          Journals Collection
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl border border-gray-200 text-sm">
            <thead className="bg-[#132347] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">National</th>
                <th className="px-6 py-3 text-left">International</th>
                <th className="px-6 py-3 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="px-6 py-3 font-medium">Printed Journals</td>
                <td className="px-6 py-3">6</td>
                <td className="px-6 py-3">5</td>
                <td className="px-6 py-3">11</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="px-6 py-3 font-medium">E-journals</td>
                <td className="px-6 py-3">7</td>
                <td className="px-6 py-3">424</td>
                <td className="px-6 py-3">431</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
