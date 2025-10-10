export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-1 px-2 bg-header-bg border-t border-border text-muted font-ui text-xs">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Git Branch */}
        <a
          href="https://github.com/omokgosu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 hover:bg-muted/30 rounded cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span>main</span>
        </a>

        {/* Error Icon */}
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-500 flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 16 16" fill="white">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
            </svg>
          </div>
          <span>0</span>
        </div>

        {/* Warning Icon */}
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-500 flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 16 16" fill="white">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
          <span>1</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Name */}
        <div className="flex items-center gap-1">
          <span>Jinsung Tab</span>
        </div>

        {/* Birth Year & Location */}
        <span>Born 1996, Seoul</span>

        {/* Role */}
        <span>Frontend Developer</span>

        {/* Experience */}
        <span>2+ Years Experience</span>

        {/* Tech Stack */}
        <span>React • Next.js • TypeScript</span>

        {/* Email */}
        <div className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
          </svg>
          <span>anfakt0606@naver.com</span>
        </div>
      </div>
    </footer>
  );
}
