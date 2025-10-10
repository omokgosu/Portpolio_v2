import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "양진성 | Frontend Developer Portfolio",
  description:
    "프론트엔드 개발자 양진성을 소개합니다. 열정적으로 사용자 경험을 개선하고 최신 웹 기술을 활용하여 가치있는 서비스를 만들어갑니다.",
  keywords: [
    "양진성",
    "양진성 소개",
    "프론트엔드",
    "프론트엔드 개발자",
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
      "프론트엔드 개발자 양진성을 소개합니다. 열정적으로 사용자 경험을 개선하고 최신 웹 기술을 활용하여 가치있는 서비스를 만들어갑니다.",
    type: "profile",
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
      <div className="mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            안녕하세요, 양진성입니다 👋
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
            <br />
            깔끔하고 직관적인 인터페이스를 만드는 것을 좋아하며, 정말 의미있는
            서비스를 만들어냈을 때 기쁨을 느낍니다.
          </p>
        </div>

        {/* 자기소개 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-2">
            About Me
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              AI 시대에 개인보다 팀의 시너지를 믿으며 그 속에서{" "}
              <span className="font-bold text-foreground">
                탁월한 소통과 협업을 핵심 가치
              </span>
              로 삼습니다.
            </p>
            <p>
              팀 전체가{" "}
              <span className="font-bold text-foreground">
                효율적으로 협업할 수 있는 최적화된 시스템을 구축하는
              </span>
              것에 관심이 있습니다.
            </p>
            <p>
              쉽게 삭제하고 개선할 수 있는{" "}
              <span className="font-bold text-foreground">
                유연하고 간결한 코드를 지향
              </span>
              합니다.
            </p>
            <p>
              단순히 알고 있는 것을 넘어, 명확하게 정리하고 공유하는 것을
              좋아합니다.{" "}
              <span className="font-bold text-foreground">
                꾸준히 블로그에 기록활동을 이어가고 있습니다.
              </span>
            </p>
          </div>
        </div>

        {/* 기술 스택 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-2">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-foreground">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                  "SCSS",
                  "Tanstack Query",
                  "recoil",
                  "Zustand",
                  "storybook",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3 text-foreground">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "C",
                  "Python",
                  "Docker",
                  "AWS",
                  "MySQL",
                  "MongoDB",
                  "Figma",
                  "Git",
                  "Node.js",
                  "Slack",
                  "Jira",
                  "Confluence",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 경력/경험 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-2">
            Carrer
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-medium text-foreground">
                피앤씨스타 / FE - 정규직
              </h3>
              <p className="text-muted-foreground">2023.02 - 2025.05</p>
              <ul className="flex flex-col gap-2 text-muted-foreground mt-2 list-disc list-inside">
                <li>
                  React와 Next.js를 활용한 고객사 웹 서비스 운영 및 유지보수 및
                  CS 응대
                </li>
                <li>
                  PHP에서 React.js 로 마이그레이션 하며 FCP 개선 및 TBT 개선,
                  Right House 점수 30점 향상
                </li>
                <li>사내 OCR 솔루션 개발 및 유지보수</li>
                <li>디자인 시스템 적용 및 공통 모듈 개발</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 연락처 섹션 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-foreground border-b border-border pb-2">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-4">
            함께 일하고 싶다는 생각이 드셨거나, 프로젝트에 대해 이야기하고
            싶으시다면 언제든 연락주세요!
            <br />
            커피챗은 언제든 환영입니다 :)
          </p>
          <div className="flex gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              연락하기
            </a>
            <a
              href="/projects"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              프로젝트 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
