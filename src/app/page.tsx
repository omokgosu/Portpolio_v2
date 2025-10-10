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
    <div className="p-8 h-full overflow-auto">
      <h1 className="text-2xl font-bold mb-4">홈 페이지</h1>
      <p className="text-muted-foreground">
        양진성의 프론트엔드 개발자 포트폴리오에 오신 것을 환영합니다.
      </p>
    </div>
  );
}
