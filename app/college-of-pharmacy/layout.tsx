import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About College of Pharmacy",
  description:
    "Discover SVKM's College of Pharmacy, Shirpur, including institutional profile, leadership message, and academic vision.",
};

export default function CollegeOfPharmacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
