import type { ReactNode } from "react";

export function BrowserFrame({
  url,
  className = "",
  children,
}: {
  url: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure className={`frame frame-browser ${className}`}>
      <div className="frame-bar" dir="ltr" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="frame-url">{url}</span>
      </div>
      {children}
    </figure>
  );
}

export function PhoneFrame({ className = "", children }: { className?: string; children: ReactNode }) {
  return <figure className={`frame frame-phone ${className}`}>{children}</figure>;
}
