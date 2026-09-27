import type { Project } from "./types";

/**
 * Facts that are the same in every language: contact details, links, the CV.
 * Edit here; the pages read from this file.
 */

/** Replace with the real domain before deploying (used for canonical URLs and share cards). */
export const SITE_URL = "https://ahmed-abdalrahman.vercel.app";

export const person = {
  name: "Ahmed Abdalrahman",
  fullName: "Ahmed Abdalrahman Altayeb",
  email: "ahmedabdalrahman706@gmail.com",
  phone: "+249 126 414 252",
  phoneHref: "tel:+249126414252",
  /** International format without "+", as wa.me expects. */
  whatsapp: "249126414252",
  linkedin: "https://www.linkedin.com/in/ahmed-abdalrahman-105a67237",
  github: "https://github.com/AHMED-JMD",
  cv: "/Ahmed-Abdalrahman-CV.pdf",
} as const;

/**
 * Each client's own brand colours, sampled from their assets, for their
 * case-study stage. `motif` draws Luma's three-tree mark behind the frames.
 */
export const brands: Record<Project["id"], { bg: string; ink: string; accent: string; motif?: boolean }> = {
  luma: { bg: "#EFEBE1", ink: "#4B3A2A", accent: "#768A45", motif: true },
  baladna: { bg: "#F3EDE3", ink: "#2B3720", accent: "#ED1B24" },
  majalis: { bg: "#0C2229", ink: "#F3E9D2", accent: "#C9922E" },
  pos: { bg: "#EEE7DF", ink: "#3B2A22", accent: "#1F7A64" },
  oil: { bg: "#1E2046", ink: "#E8EAF6", accent: "#3D63DD" },
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(message)}`;
