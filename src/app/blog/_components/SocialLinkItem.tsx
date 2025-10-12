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
    <div className="flex items-center">
      <span className="text-orange-400">{keyName}:</span>
      <Link
        href={href}
        className="text-yellow-400 ml-2 hover:text-yellow-300 transition-colors underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
      <span className="text-foreground">;</span>
    </div>
  );
}
