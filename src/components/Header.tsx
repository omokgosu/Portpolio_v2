import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center py-1 px-2 bg-header-bg border-b border-border text-muted font-ui">
      <h1 className="text-sm text-center text-foreground font-semibold flex-1 order-2">
        YANG JIN SUNG - FRONTEND DEVELOPER PORTFOLIO - V2
      </h1>
      <div className="flex items-center gap-2 flex-1 order-1">
        <Image src="/icons/cursor_logo.svg" alt="logo" width={16} height={16} />
        <ul className="flex items-center gap-2">
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              File
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              Edit
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              Selection
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              View
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              Go
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              Run
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              Terminal
            </button>
          </li>
          <li>
            <button className="px-2 py-1 text-sm hover:bg-muted/30 transition-colors rounded">
              Help
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1 order-3"></div>
    </header>
  );
}
