interface SocialsCodeBlockProps {
  children: React.ReactNode;
  name: string;
  type: string;
}

export default function SocialsCodeBlock({
  children,
  name,
  type,
}: SocialsCodeBlockProps) {
  return (
    <div className="flex px-3 mb-9">
      {/* 코드 내용 */}
      <div className="flex-1">
        <div className="font-mono text-sm">
          <div className="mb-2 font-semibold">
            <span
              className={`${
                type === "id" ? "text-code-variable" : "text-code-type"
              }`}
            >{`${name}`}</span>
            <span className="text-code-type">{" {"}</span>
          </div>

          <div className="ml-4 space-y-2">{children}</div>

          <div className="mt-2 font-semibold">
            <span className="text-code-type">{`}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
