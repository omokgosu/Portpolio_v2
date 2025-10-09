import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "양진성 | Frontend Developer Portfolio",
  description:
    "프론트엔드 개발자 양진성의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 프로젝트를 소개합니다.",
  keywords: [
    "양진성",
    "프론트엔드",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "웹 개발",
    "포트폴리오",
  ],
  authors: [{ name: "양진성" }],
  openGraph: {
    title: "양진성 | Frontend Developer Portfolio",
    description:
      "프론트엔드 개발자 양진성의 포트폴리오입니다. React, Next.js, TypeScript를 활용한 웹 개발 프로젝트를 소개합니다.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1>홈 페이지</h1>
    </div>
  );
}
