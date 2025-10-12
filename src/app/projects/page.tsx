import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "양진성의 프론트엔드 개발 프로젝트를 확인하세요. React, Next.js, TypeScript를 활용한 실무 및 개인 프로젝트를 소개합니다.",
  keywords: [
    "프로젝트",
    "포트폴리오",
    "React 프로젝트",
    "Next.js",
    "웹 개발",
    "Frontend Projects",
  ],
  openGraph: {
    title: "Projects | 양진성",
    description: "양진성의 프론트엔드 개발 프로젝트 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1>Projects 페이지</h1>
    </div>
  );
}
