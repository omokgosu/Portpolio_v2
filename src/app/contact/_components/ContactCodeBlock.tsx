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
            <span className="text-code-keyword">export const</span>{" "}
            <span className="text-code-variable">{variableName}</span>
            <span className="text-foreground">: </span>
            <span className="text-code-type">{typeName}</span>
            <span className="text-foreground"> = </span>
            <span className="text-code-type">{"{"}</span>
          </div>

          {/* properties */}
          <div className="ml-4 space-y-2">
            {items.map((item) => (
              <div key={item.key}>
                <span className="text-code-variable">{item.key}</span>
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
                    className="text-code-link hover:underline"
                  >
                    &quot;{item.value}&quot;
                  </a>
                ) : (
                  <span className="text-code-string">
                    &quot;{item.value}&quot;
                  </span>
                )}
                <span className="text-foreground">,</span>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <span className="text-code-type">{"}"}</span>
            <span className="text-code-variable"> as const</span>
            <span className="text-foreground">;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
