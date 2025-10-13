import type { Metadata } from "next";
import InterfaceCodeBlock from "./_components/InterfaceCodeBlock";
import ContactCodeBlock from "./_components/ContactCodeBlock";

export const metadata: Metadata = {
  title: "Contact",
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
    <div className="p-8 h-full overflow-auto">
      <div className="mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Contact</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            함께 일하고 싶거나, 프로젝트에 대해 이야기하고 싶으시다면 언제든
            연락주세요!
            <br />
            커피챗은 언제나 환영합니다 ☕
          </p>
        </div>

        {/* 라인 번호 */}
        <div className="flex">
          <div className="text-muted-foreground text-sm font-mono select-none">
            <div className="space-y-2">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            {/* Interface 정의 */}
            <InterfaceCodeBlock
              interfaceName="ContactInfo"
              properties={[
                { key: "email", type: "string" },
                { key: "github", type: "string" },
                { key: "velog", type: "string" },
                { key: "message", type: "string" },
                { key: "responseTime", type: "string" },
              ]}
            />

            {/* Contact 객체 */}
            <ContactCodeBlock
              variableName="contact"
              typeName="ContactInfo"
              items={[
                {
                  key: "email",
                  value: "anfakt0606@naver.com",
                  href: "mailto:anfakt0606@naver.com",
                  isLink: true,
                },
                {
                  key: "github",
                  value: "https://github.com/omokgosu",
                  href: "https://github.com/omokgosu",
                  isLink: true,
                },
                {
                  key: "velog",
                  value: "https://velog.io/@dkzm4646",
                  href: "https://velog.io/@dkzm4646/posts",
                  isLink: true,
                },
                {
                  key: "message",
                  value: "언제든 연락주세요! 커피챗 환영합니다",
                  isLink: false,
                },
                {
                  key: "responseTime",
                  value: "보통 24시간 이내",
                  isLink: false,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
