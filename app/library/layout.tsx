import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Explore library facilities, services, timings, and collections at SVKM's College of Pharmacy, Shirpur.",
};

export default function LibraryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
