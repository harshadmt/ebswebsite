import type { Metadata } from "next";
import { Manrope, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Entrepreneurs Business School (EBS) | In Alliance with 3G & Mission Malappuram 2050",
  description: "Become a Billion Dollar Founder. An elite institutional web platform delivering practical venture education across 5 stages, from idea feasibility to sovereign conglomerate scale.",
  keywords: [
    "Entrepreneurs Business School",
    "EBS",
    "Mission Malappuram 2050",
    "3G Alliance",
    "Entrepreneur Potential Assessment",
    "Startup Accelerator",
    "Billion Dollar Founder",
    "Venture Scale",
  ],
  authors: [{ name: "Entrepreneurs Business School" }],
  openGraph: {
    title: "Entrepreneurs Business School (EBS) | Official Institutional Platform",
    description: "Developing the founders of tomorrow. Think Bigger. Build Bigger. Progressive venture education in alliance with 3G and Mission Malappuram 2050.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="font-inter bg-[#f1fcf8] text-[#131d1c] min-h-screen selection:bg-[#ffefb3] selection:text-[#002622]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
