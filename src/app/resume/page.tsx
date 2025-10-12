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
    <div className="p-8 h-full overflow-auto">
      <div className="mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Resume.md</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            저에 대해 더 궁금하시다면 아래 버튼을 통해 이력서를 다운로드해서
            읽어주세요!
          </p>
        </div>

        {/* 마크다운 스타일 다운로드 섹션 */}
        <div className="flex">
          {/* 라인 번호 */}
          <div className="text-muted-foreground text-sm font-mono select-none">
            <div className="space-y-2">
              {Array.from({ length: 7 }).map((_, index) => (
                <div key={index}>{index + 1}</div>
              ))}
            </div>
          </div>

          {/* 마크다운 콘텐츠 */}
          <div className="flex-1 font-mono text-sm space-y-2 pl-4">
            <div className="text-foreground">
              <span className="text-primary">#</span> Resume
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">##</span> Information
            </div>
            <div className="text-muted-foreground pl-4">
              저에 대한 자세한 정보가 담긴 이력서입니다.
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">##</span> Download
            </div>
            <div className="pl-4">
              <a
                href="/resume.pdf"
                download="양진성_이력서.pdf"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                [이력서_다운로드.pdf]
              </a>
            </div>
            <div className="text-muted-foreground">
              <span className="text-primary">---</span>
            </div>
            <div className="text-muted-foreground text-xs pl-4">
              Last updated: 2025-10-13 | Format: PDF | Pages: 1-2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
