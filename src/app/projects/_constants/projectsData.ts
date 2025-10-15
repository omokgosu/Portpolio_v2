export interface Project {
  id: string;
  title: string;
  skils: string[];
  period: string;
  role: string;
}

export const projectsData: Project[] = [
  {
    id: "Good-Job",
    title: "구직자를 위한 커리어 플랫폼",
    period: "2025.08 - 2025.10",
    skils: [
      "Next.js",
      "TypeScript",
      "tailwind CSS",
      "Shadcn UI",
      "Tanstack Query",
      "Zustand",
      "react-hook-form",
      "jira",
      "confluence",
      "aws",
    ],
    role: "풀스택 개발자",
  },
  {
    id: "신한은행 - AI Arena",
    title: "LLM 품질 비교 목적의 사내 서비스",
    period: "2024.06 - 2024.08",
    skils: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "module.scss",
      "recoil",
      "SSE",
    ],
    role: "프론트엔드 개발자",
  },
];
