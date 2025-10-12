import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "프론트엔드 개발자 양진성의 이력서입니다. 학력, 경력, 프로젝트 경험 및 기술 역량을 확인하세요.",
  keywords: ["이력서", "Resume", "경력", "학력", "프론트엔드 개발자 이력서"],
  openGraph: {
    title: "Resume | 양진성",
    description: "프론트엔드 개발자 양진성의 이력서",
    type: "profile",
    locale: "ko_KR",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen p-8">
      <h1>Resume 페이지</h1>
    </div>
  );
}
