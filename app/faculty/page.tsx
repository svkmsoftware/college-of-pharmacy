"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

type FacultyItem = {
  sr: number;
  name: string;
  designation: string;
  photo?: string;
};

const FACULTY: FacultyItem[] = [
  {
    sr: 1,
    name: "Dr. Vivekkumar Redasani",
    designation: "Principal",
    photo: "/images/faculty/sample_profile.png",
  },
  {
    sr: 2,
    name: "Dr. Pankaj Pal",
    designation: "Assistant Professor",
    photo: "/images/faculty/sample_profile.png",
  },
  {
    sr: 3,
    name: "Dr. Krishna Swaroop Akey",
    designation: "Assistant Professor",
    photo: "/images/faculty/sample_profile.png",
  },
  {
    sr: 4,
    name: "Ms. Aishwarya Jain",
    designation: "Assistant Professor",
    photo: "/images/faculty/sample_profile.png",
  },
  {
    sr: 5,
    name: "Ms. Kamini Patil",
    designation: "Assistant Professor",
    photo: "/images/faculty/sample_profile.png",
  },
  {
    sr: 6,
    name: "Ms. Mohini Tayade",
    designation: "Assistant Professor",
    photo: "/images/faculty/sample_profile.png",
  },
];

export default function FacultyPage() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<FacultyItem | null>(null);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return FACULTY;
    return FACULTY.filter(
      (f) =>
        String(f.sr).includes(term) ||
        f.name.toLowerCase().includes(term) ||
        f.designation.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}

      <PageHero
        bannerImage="/images/page_banner.png"
        pageTitle="Faculty"
        description="Meet our experienced teaching team — committed to teaching,
              research, and student mentorship."
      />

      {/* Faculty Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center py-3 w-full sm:w-auto">
          <label htmlFor="faculty-search" className="relative w-full sm:w-72">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <Search size={16} />
            </span>
            <input
              id="faculty-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search faculty..."
              className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>
        </div>
        {filtered.length === 0 ? (
          <div className="text-center text-gray-600 bg-white p-6 rounded-xl border">
            No faculty matched your search.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((f) => (
              <div
                key={f.sr}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={f.photo || "/images/faculty/sample_profile.png"}
                    alt={f.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-heading text-lg text-[#132347] font-semibold">
                  {f.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{f.designation}</p>

                <button
                  onClick={() => setSelected(f)}
                  className="mt-4 text-sm inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#132347] text-[#132347] hover:bg-[#132347]/5 transition"
                >
                  View
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-sm p-6 relative animate-fadeIn text-center">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <Image
                  src={selected.photo || "/images/faculty/sample_profile.png"}
                  alt={selected.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="font-heading text-xl text-[#132347] font-semibold">
                {selected.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {selected.designation}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 bg-[#132347] text-white px-6 py-2 rounded-md hover:bg-[#0e1e39] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
