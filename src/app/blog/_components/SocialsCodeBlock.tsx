interface SocialsCodeBlockProps {
  children: React.ReactNode;
  name: string;
}

export default function SocialsCodeBlock({
  children,
  name,
}: SocialsCodeBlockProps) {
  return (
    <div className="flex px-3 mb-9">
      {/* 코드 내용 */}
      <div className="flex-1">
        <div className="font-mono text-sm">
          <div className="mb-2">
            <span className="text-orange-400">{name}</span>
            <span className="text-foreground"> {`{`}</span>
          </div>

          <div className="ml-4 space-y-2">{children}</div>

          <div className="mt-2">
            <span className="text-foreground">{`}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
