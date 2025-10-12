import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "프론트엔드 개발 관련 기술 블로그입니다. 개발 경험, 기술 트렌드, 문제 해결 과정을 공유합니다.",
  keywords: [
    "개발 블로그",
    "프론트엔드 블로그",
    "기술 블로그",
    "Tech Blog",
    "개발 경험",
  ],
  openGraph: {
    title: "Blog | 양진성",
    description: "프론트엔드 개발 관련 기술 블로그",
    type: "website",
    locale: "ko_KR",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8">
      <h1>Blog 페이지</h1>
    </div>
  );
}
