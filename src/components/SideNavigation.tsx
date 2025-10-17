"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface TreeNode {
  name: string;
  type: "file" | "folder";
  href?: string;
  extension?: string;
  children?: TreeNode[];
}

const fileStructure: TreeNode[] = [
  { name: ".next", type: "folder" },
  { name: "node_modules", type: "folder" },
  { name: "public", type: "folder" },
  {
    name: "app",
    type: "folder",
    children: [
      { name: "about.tsx", type: "file", href: "/", extension: "tsx" },
      { name: "blog.scss", type: "file", href: "/blog", extension: "scss" },
      {
        name: "Projects.json",
        type: "file",
        href: "/projects",
        extension: "json",
      },
      { name: "Resume.md", type: "file", href: "/resume", extension: "md" },
      { name: "Contact.ts", type: "file", href: "/contact", extension: "ts" },
    ],
  },
];

function TreeNodeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const hasChildren = node.children && node.children.length > 0;
  const isActive =
    node.href &&
    (pathname === node.href ||
      (node.href !== "/" && pathname.startsWith(node.href + "/")));

  const getFileIcon = (extension?: string) => {
    switch (extension) {
      case "tsx":
        return "/icons/react.svg";
      case "scss":
        return "/icons/scss.svg";
      case "json":
        return "/icons/json.svg";
      case "md":
        return "/icons/md.svg";
      case "ts":
        return "/icons/ts.svg";
      default:
        return "/icons/ts.svg";
    }
  };

  const handleClick = () => {
    if (node.type === "folder") {
      setIsOpen(!isOpen);
    }
  };

  const renderContent = () => {
    const content = (
      <div
        className={`
          flex items-center gap-1 px-2 py-0.5 text-sm cursor-pointer
          ${
            isActive
              ? "bg-muted/15 text-foreground"
              : "text-muted-foreground hover:bg-muted/15 hover:text-foreground"
          }
        `}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={handleClick}
      >
        {node.type === "folder" && (
          <Image
            src="/icons/chevron.svg"
            alt="chevron"
            width={16}
            height={16}
            className={`${isOpen ? "" : "-rotate-90"}`}
          />
        )}
        {node.type === "file" && <span className="w-4"></span>}
        {node.type === "file" && (
          <Image
            src={getFileIcon(node.extension)}
            alt={node.extension || "file"}
            width={16}
            height={16}
          />
        )}
        <span>{node.name}</span>
      </div>
    );

    if (node.type === "file" && node.href) {
      return (
        <Link href={node.href} className="block">
          {content}
        </Link>
      );
    }

    return content;
  };

  return (
    <div>
      {renderContent()}
      {hasChildren && isOpen && (
        <div>
          {node.children?.map((child, index) => (
            <TreeNodeItem
              key={`${child.name}-${index}`}
              node={child}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SideNavigation() {
  return (
    <div className="w-64 bg-header-bg border-r border-border flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div>
          {fileStructure.map((node, index) => (
            <TreeNodeItem key={`${node.name}-${index}`} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
