import type { Metadata } from "next";
import { projectsData } from "./_constants/projectsData";
import ProjectJsonBlock from "./_components/ProjectJsonBlock";

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
    <div className="p-8 h-full overflow-auto">
      <div className="mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            Projects.json
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            제가 작업한 프로젝트들입니다. 클릭하시면 자세한 내용을 확인하실 수
            있습니다.
          </p>
        </div>

        {/* JSON 배열 시작 */}
        <div className="flex">
          <div className="text-muted-foreground text-sm font-mono select-none">
            <div className="space-y-2">
              {Array.from({ length: 16 }).map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex px-3">
              <div className="flex-1">
                <div className="font-mono text-sm">
                  <div className="mb-2">
                    <span className="text-code-keyword">const</span>{" "}
                    <span className="text-code-variable">projects</span>
                    <span className="text-foreground">: </span>
                    <span className="text-code-type">Project[]</span>
                    <span className="text-foreground"> = [</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 프로젝트 목록 */}
            {projectsData.map((project, index) => (
              <ProjectJsonBlock
                key={project.id}
                project={project}
                index={index}
              />
            ))}

            {/* JSON 배열 끝 */}
            <div className="font-mono text-sm px-3">
              <span className="text-foreground">];</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
