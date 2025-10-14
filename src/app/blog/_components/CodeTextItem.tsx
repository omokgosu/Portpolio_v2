interface CodeTextItemProps {
  keyName: string;
  value: string;
}

export default function CodeTextItem({ keyName, value }: CodeTextItemProps) {
  return (
    <div className="flex items-center text-foreground">{`${keyName}: ${value};`}</div>
  );
}
