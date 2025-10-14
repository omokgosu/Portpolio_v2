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
    <Link href={`/projects/${project.id}`} className="ml-2">
      <div className="flex px-3 mb-2 hover:bg-muted/30 rounded-lg transition-colors cursor-pointer group">
        <div className="flex-1">
          <div className="font-mono text-sm">
            {/* 프로젝트 시작 */}
            <div className="mb-2">
              <span className="text-foreground">{"{"}</span>
            </div>

            <div className="ml-6 space-y-2">
              {/* id */}
              <div>
                <span className="text-blue-300">id</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"{project.id}"</span>
                <span className="text-foreground">,</span>
              </div>

              {/* title */}
              <div>
                <span className="text-blue-300">title</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400 group-hover:underline">
                  "{project.title}"
                </span>
                <span className="text-foreground">,</span>
              </div>

              {/* skills */}
              <div>
                <span className="text-blue-300">skills</span>
                <span className="text-foreground">: [</span>
                {project.skils.map((skill, idx) => (
                  <span key={skill}>
                    <span className="text-green-400">"{skill}"</span>
                    {idx < project.skils.length - 1 && (
                      <span className="text-foreground">, </span>
                    )}
                  </span>
                ))}
                <span className="text-foreground">],</span>
              </div>

              {/* period */}
              <div>
                <span className="text-blue-300">period</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"{project.period}"</span>
                <span className="text-foreground">,</span>
              </div>

              {/* role */}
              <div>
                <span className="text-blue-300">role</span>
                <span className="text-foreground">: </span>
                <span className="text-green-400">"{project.role}"</span>
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
