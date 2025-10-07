import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRAJWALAN - Ignition of Ideas | ACM RCOEM",
  description: "Join PRAJWALAN, an electrifying DSA & CP coding contest organized by ACM Student Chapter, RCOEM. Compete for prizes worth ₹12,000 this Diwali!",
  keywords: "PRAJWALAN, ACM, RCOEM, coding contest, DSA, competitive programming, hackathon, Diwali",
  authors: [{ name: "ACM Student Chapter, RCOEM" }],
  openGraph: {
    title: "PRAJWALAN - Ignition of Ideas",
    description: "An electrifying DSA & CP coding contest. Compete for ₹12,000 in prizes!",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRAJWALAN - Ignition of Ideas",
    description: "An electrifying DSA & CP coding contest. Compete for ₹12,000 in prizes!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}