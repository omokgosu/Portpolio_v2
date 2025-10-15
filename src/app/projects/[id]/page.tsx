import { notFound } from "next/navigation";
import { projectsData } from "../_constants/projectsData";
import fs from "fs";
import path from "path";
import MarkdownRenderer from "./_components/MarkdownRenderer";

// 정적 경로 생성
export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// 메타데이터 생성
export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    };
  }

  return {
    title: project.title,
    description: `${project.title} - ${project.role}`,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 프로젝트 데이터 찾기
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // 마크다운 파일 읽기
  let markdownContent = "";
  try {
    const markdownPath = path.join(
      process.cwd(),
      "public",
      "projects",
      `${params.id}.md`
    );
    markdownContent = fs.readFileSync(markdownPath, "utf-8");
  } catch (error) {
    console.error("마크다운 파일을 읽는 중 오류 발생:", error);
    markdownContent = "# 프로젝트 문서를 불러올 수 없습니다.";
  }

  return (
    <div className="h-full overflow-auto">
      {/* 프로젝트 헤더 정보 */}
      <div className="p-8 border-b border-border bg-header-bg">
        <h1 className="text-3xl font-bold mb-4 text-foreground">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div>
            <span className="font-semibold">기간:</span> {project.period}
          </div>
          <div>
            <span className="font-semibold">역할:</span> {project.role}
          </div>
        </div>
        <div className="mt-4">
          <div className="font-semibold text-muted-foreground mb-2">
            기술 스택:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.skils.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-md bg-main-bg text-foreground text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 마크다운 컨텐츠 */}
      <div className="p-8">
        <MarkdownRenderer content={markdownContent} />
      </div>
    </div>
  );
}
