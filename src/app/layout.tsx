import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-v2.vercel.app"),
  title: {
    default: "양진성 | Frontend Developer",
    template: "%s | 양진성",
  },
  description: "양진성의 프론트엔드 포트폴리오",
  keywords: [
    "양진성",
    "프론트엔드",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "웹 개발",
  ],
  authors: [{ name: "양진성" }],
  creator: "양진성",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "양진성 Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// components
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}
      >
        <div className="w-full h-full flex flex-col">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <SideNavigation />
            <main className="flex-1 overflow-auto bg-main-bg">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
