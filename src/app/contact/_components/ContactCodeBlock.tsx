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
    <div className="flex px-3 mb-9">
      <div className="flex-1">
        <div className="font-mono text-sm">
          {/* const 선언 */}
          <div className="mb-2">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">{variableName}</span>
            <span className="text-foreground">: </span>
            <span className="text-yellow-300">{typeName}</span>
            <span className="text-foreground"> = {"{"}</span>
          </div>

          {/* properties */}
          <div className="ml-4 space-y-2">
            {items.map((item) => (
              <div key={item.key}>
                <span className="text-blue-300">{item.key}</span>
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
                    className="text-green-400 hover:underline"
                  >
                    "{item.value}"
                  </a>
                ) : (
                  <span className="text-green-400">"{item.value}"</span>
                )}
                <span className="text-foreground">,</span>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <span className="text-foreground">{"}"}</span>
            <span className="text-purple-400"> as const</span>
            <span className="text-foreground">;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
