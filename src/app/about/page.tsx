import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | 양진성",
  description:
    "프론트엔드 개발자 양진성을 소개합니다. 열정적으로 사용자 경험을 개선하고 최신 웹 기술을 활용하여 가치있는 서비스를 만들어갑니다.",
  keywords: [
    "양진성 소개",
    "프론트엔드 개발자",
    "자기소개",
    "경력",
    "Frontend Developer",
  ],
  openGraph: {
    title: "About | 양진성",
    description: "프론트엔드 개발자 양진성을 소개합니다.",
    type: "profile",
    locale: "ko_KR",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <h1>About 페이지</h1>
    </div>
  );
}
