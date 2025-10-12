interface CodeTextItemProps {
  keyName: string;
  value: string;
}

export default function CodeTextItem({ keyName, value }: CodeTextItemProps) {
  return (
    <div className="flex items-center">
      <span className="text-orange-400">{keyName}:</span>
      <span className="text-yellow-400 ml-2">{value}</span>
      <span className="text-foreground">;</span>
    </div>
  );
}
