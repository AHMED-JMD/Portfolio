import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = (d: string) =>
  function Icon(props: P) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d={d} />
      </svg>
    );
  };

export const ArrowRight = stroke("M5 12h14M13 6l6 6-6 6");
export const ArrowUpRight = stroke("M7 17 17 7M8 7h9v9");
export const Download = stroke("M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14");
export const Menu = stroke("M4 7h16M4 12h16M4 17h10");
export const Close = stroke("M6 6l12 12M18 6 6 18");
export const ChevronLeft = stroke("M15 6l-6 6 6 6");
export const ChevronRight = stroke("M9 6l6 6-6 6");
export const ChevronDown = stroke("M6 9l6 6 6-6");
export const Moon = stroke("M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z");
export const Sun = stroke(
  "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
);

export function WhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.42 1.3-1.95 1.34-.5.05-.97.24-3.27-.68-2.77-1.09-4.51-3.92-4.65-4.1-.13-.18-1.1-1.46-1.1-2.79s.7-1.98.95-2.25c.24-.27.53-.34.71-.34h.51c.16 0 .38-.06.6.46.24.54.8 1.87.87 2.01.07.13.11.3.02.48-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.55.16.27.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.27.13.43.11.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.23.61-.14.25.09 1.58.75 1.85.88.27.13.45.2.52.31.07.11.07.64-.17 1.32Z" />
    </svg>
  );
}
