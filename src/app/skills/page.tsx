import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "프론트엔드 개발자 양진성의 기술 스택입니다. React, Next.js, TypeScript, JavaScript, HTML/CSS, Git 등 다양한 웹 기술을 다룹니다.",
  keywords: [
    "기술스택",
    "Skills",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend",
    "웹 개발",
  ],
  openGraph: {
    title: "Skills | 양진성",
    description: "프론트엔드 개발자 양진성의 기술 스택",
    type: "website",
    locale: "ko_KR",
  },
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1>Skills 페이지</h1>
    </div>
  );
}
