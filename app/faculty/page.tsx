"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FACULTY from "../../data/faculty";

type FacultyItem = {
  sr: number;
  name: string;
  designation: string;
  photo?: string;

  qualification?: string;
  specialization?: string;
  email?: string;

  experience?: {
    total: number;
    academic: number;
    industrial: number;
  };

  researchArea?: string;
  publications?: {
    total: number;
    national: number;
    international: number;
  };

  presentations?: {
    total: number;
    oral: number;
    poster: number;
  };

  books?: {
    books: number;
    chapters: number;
  };

  guidance?: {
    phd: number;
    mpharm: number;
    bpharm: number;
  };

  membership?: string[];
  awards?: string;
  otherInfo?: string;
};

function Detail({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="grid sm:grid-cols-3 gap-2">
      <p className="font-medium text-[#132347]">{label}</p>
      <p className="sm:col-span-2 text-gray-700">{value}</p>
    </div>
  );
}

export default function FacultyPage() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<FacultyItem | null>(null);
  const facultyList: FacultyItem[] = FACULTY;

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return facultyList;
    return facultyList.filter(
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
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-[#132347]/10 group-hover:ring-[#132347]/30 transition">
                    <Image
                      src={f.photo || "/images/faculty/sample_profile.png"}
                      alt={f.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#132347]">
                  {f.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{f.designation}</p>

                <button
                  onClick={() => setSelected(f)}
                  className="mt-4 text-sm font-medium px-5 py-2 rounded-full border border-[#132347] text-[#132347] hover:bg-[#132347] hover:text-white transition"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-[95%] max-w-4xl p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Left */}
              <div className="text-center md:text-left flex flex-col items-center md:items-start">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-4 ring-4 ring-[#132347]/20">
                  <Image
                    src={selected.photo || "/images/faculty/sample_profile.png"}
                    alt={selected.name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className="text-2xl font-semibold text-[#132347]">
                  {selected.name}
                </h2>

                <p className="text-gray-600 mt-1">{selected.designation}</p>

                {selected.email && (
                  <a
                    href={`mailto:${selected.email}`}
                    className="mt-2 text-sm text-[#132347] hover:underline"
                  >
                    {selected.email}
                  </a>
                )}
              </div>

              {/* Right */}
              <div className="md:col-span-2 space-y-4 text-sm text-gray-700">
                <Detail label="Qualification" value={selected.qualification} />
                <Detail
                  label="Specialization"
                  value={selected.specialization}
                />
                <Detail
                  label="Area of Research"
                  value={selected.researchArea}
                />

                <Detail
                  label="Experience (Years)"
                  value={`Total: ${selected.experience?.total}, Academic: ${selected.experience?.academic}, Industrial: ${selected.experience?.industrial}`}
                />

                <Detail
                  label="Publications"
                  value={`Total: ${selected.publications?.total}, National: ${selected.publications?.national}, International: ${selected.publications?.international}`}
                />

                <Detail
                  label="Presentations"
                  value={`Total: ${selected.presentations?.total}, Oral: ${selected.presentations?.oral}, Poster: ${selected.presentations?.poster}`}
                />

                <Detail
                  label="Books & Chapters"
                  value={`Books: ${selected.books?.books}, Chapters: ${selected.books?.chapters}`}
                />

                <Detail
                  label="Students Guided"
                  value={`PhD: ${selected.guidance?.phd}, M.Pharm: ${selected.guidance?.mpharm}, B.Pharm: ${selected.guidance?.bpharm}`}
                />

                <hr className="my-4 border-gray-200" />

                {selected.membership && (
                  <div>
                    <p className="font-medium text-[#132347] mb-1">
                      Professional Membership
                    </p>
                    <ul className="list-disc list-inside">
                      {selected.membership.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
