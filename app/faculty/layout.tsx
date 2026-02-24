import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the faculty members of SVKM's College of Pharmacy, Shirpur, and explore their qualifications, expertise, and research areas.",
};

export default function FacultyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
