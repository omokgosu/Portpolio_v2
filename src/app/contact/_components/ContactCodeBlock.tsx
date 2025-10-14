interface ContactItem {
  key: string;
  value: string;
  href?: string;
  isLink: boolean;
}

interface ContactCodeBlockProps {
  variableName: string;
  typeName: string;
  items: ContactItem[];
}

export default function ContactCodeBlock({
  variableName,
  typeName,
  items,
}: ContactCodeBlockProps) {
  return (
    <div className="flex px-3 mb-9 font-semibold">
      <div className="flex-1">
        <div className="font-mono text-sm">
          {/* const 선언 */}
          <div className="mb-2">
            <span className="text-[#74bdb7]">export const</span>{" "}
            <span className="text-[#9e94eb]">{variableName}</span>
            <span className="text-foreground">: </span>
            <span className="text-[#d19c74]">{typeName}</span>
            <span className="text-foreground"> = </span>
            <span className="text-[#d19c74]">{"{"}</span>
          </div>

          {/* properties */}
          <div className="ml-4 space-y-2">
            {items.map((item) => (
              <div key={item.key}>
                <span className="text-[#9e94eb]">{item.key}</span>
                <span className="text-foreground">: </span>
                {item.isLink && item.href ? (
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-[#d8a0d0] hover:underline"
                  >
                    "{item.value}"
                  </a>
                ) : (
                  <span className="text-[#BA8AB3]">"{item.value}"</span>
                )}
                <span className="text-foreground">,</span>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <span className="text-[#d19c74]">{"}"}</span>
            <span className="text-[#9e94eb]"> as const</span>
            <span className="text-foreground">;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
