import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | 양진성",
  description:
    "양진성에게 연락하세요. 프로젝트 협업, 채용 문의, 기술 관련 질문 등 언제든 환영합니다.",
  keywords: ["연락처", "Contact", "이메일", "채용", "협업 문의"],
  openGraph: {
    title: "Contact | 양진성",
    description: "양진성에게 연락하기",
    type: "website",
    locale: "ko_KR",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen p-8">
      <h1>Contact 페이지</h1>
    </div>
  );
}
