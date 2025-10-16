import Link from "next/link";
import type { Project } from "../_constants/projectsData";

interface ProjectJsonBlockProps {
  project: Project;
  index: number;
}

export default function ProjectJsonBlock({
  project,
  index,
}: ProjectJsonBlockProps) {
  return (
    <Link href={`/projects/${project.id}`} className="ml-2 font-semibold">
      <div className="flex px-3 mb-2 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group">
        <div className="flex-1">
          <div className="font-mono text-sm">
            {/* 프로젝트 시작 */}
            <div className="mb-2">
              <span className="text-foreground">{"{"}</span>
            </div>

            <div className="ml-6 space-y-2">
              {/* title */}
              <div>
                <span className="text-code-variable">title</span>
                <span className="text-foreground">: </span>
                <span className="text-code-string group-hover:underline">
                  &quot;{project.title}&quot;
                </span>
                <span className="text-foreground">,</span>
              </div>

              {/* description */}
              <div>
                <span className="text-code-variable">description</span>
                <span className="text-foreground">: </span>
                <span className="text-code-string">
                  &quot;{project.description}&quot;
                </span>
                <span className="text-foreground">,</span>
              </div>

              {/* skills */}
              <div>
                <span className="text-code-variable">skills</span>
                <span className="text-foreground">: [</span>
                {project.skils.map((skill, idx) => (
                  <span key={skill}>
                    <span className="text-code-string">
                      &quot;{skill}&quot;
                    </span>
                    {idx < project.skils.length - 1 && (
                      <span className="text-foreground">, </span>
                    )}
                  </span>
                ))}
                <span className="text-foreground">],</span>
              </div>

              {/* period */}
              <div>
                <span className="text-code-variable">period</span>
                <span className="text-foreground">: </span>
                <span className="text-code-string">
                  &quot;{project.period}&quot;
                </span>
                <span className="text-foreground">,</span>
              </div>

              {/* role */}
              <div>
                <span className="text-code-variable">role</span>
                <span className="text-foreground">: </span>
                <span className="text-code-string">
                  &quot;{project.role}&quot;
                </span>
                <span className="text-foreground">,</span>
              </div>
            </div>

            {/* 프로젝트 끝 */}
            <div className="mt-2">
              <span className="text-foreground">{"}"}</span>
              {index < 3 && <span className="text-foreground">,</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
