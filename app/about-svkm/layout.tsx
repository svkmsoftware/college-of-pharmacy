import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SVKM",
  description:
    "Learn about Shri Vile Parle Kelavani Mandal (SVKM), its vision, values, and educational legacy.",
};

export default function AboutSvkmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
