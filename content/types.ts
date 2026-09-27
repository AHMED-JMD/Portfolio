/** Shapes shared by content/en.ts and content/ar.ts. */

/**
 * A still (from assets/shots, via `npm run images`) and, optionally, the demo
 * clip it's the poster for (from public/video). Clips never autoplay: the
 * visitor presses play, so nobody spends mobile data they didn't choose to.
 */
export type Media = {
  src: string;
  alt: string;
  url?: string;
  video?: string;
  duration?: string;
};

export type Project = {
  /** Keys into `brands` in content/site.ts. */
  id: "luma" | "baladna" | "majalis" | "pos" | "oil";
  index: string;
  name: string;
  nameAlt: string;
  kind: string;
  year: string;
  status?: string;
  url?: string;
  urlLabel?: string;
  title: string;
  lede: string;
  customer: string;
  needed: string;
  decided: string[];
  result: string;
  stack: string[];
  /** `second` puts two frames side by side on the stage instead of desktop + phone. */
  shots: { desktop: Media; mobile?: Media; second?: Media; extra?: Media };
  /** Caption under the stage. */
  note?: string;
};

export type Quote = { quote: string; name: string; role: string };
