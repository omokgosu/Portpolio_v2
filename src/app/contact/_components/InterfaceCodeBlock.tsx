interface InterfaceCodeBlockProps {
  interfaceName: string;
  properties: { key: string; type: string }[];
}

export default function InterfaceCodeBlock({
  interfaceName,
  properties,
}: InterfaceCodeBlockProps) {
  return (
    <div className="flex px-3 mb-9 font-semibold">
      <div className="flex-1">
        <div className="font-mono text-sm">
          {/* interface 정의 */}
          <div className="mb-2">
            <span className="text-[#74bdb7]">export interface</span>{" "}
            <span className="text-[#d19c74]">{`${interfaceName} {`}</span>
          </div>

          {/* properties */}
          <div className="ml-4 space-y-2">
            {properties.map((prop) => (
              <div key={prop.key}>
                <span className="text-[#9e94eb]">{prop.key}</span>
                <span className="text-foreground">: </span>
                <span className="text-[#d8a0d0]">{prop.type}</span>
                <span className="text-foreground">;</span>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <span className="text-[#d19c74]">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
