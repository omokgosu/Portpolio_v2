import Link from "next/link";

interface SocialLinkItemProps {
  keyName: string;
  label: string;
  href: string;
}

export default function SocialLinkItem({
  keyName,
  label,
  href,
}: SocialLinkItemProps) {
  return (
    <div className="flex items-center text-foreground">
      {`${keyName}: "`}
      <Link
        href={href}
        className="underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${label}`}
      </Link>
      <span>{`";`}</span>
    </div>
  );
}
