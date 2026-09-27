import manifest from "@/content/image-manifest.json";
import type { Media } from "@/content/types";
import Shot from "./Shot";

type Entry = { width: number; height: number; widths: number[] };

/**
 * A still that becomes its demo clip on request. `preload="none"` means the
 * video costs nothing until the visitor presses play (SiteScript wires the
 * button); without a clip this is just the screenshot.
 */
export default function Player({ m, sizes, label }: { m: Media; sizes: string; label: string }) {
  if (!m.video) return <Shot src={m.src} alt={m.alt} sizes={sizes} />;

  const img = (manifest as Record<string, Entry>)[m.src];
  if (!img) throw new Error(`Unknown poster "${m.src}" — run npm run images`);
  const poster = `/work/${m.src}-${img.widths.find((w) => w >= 1200) ?? img.widths[img.widths.length - 1]}.webp`;

  return (
    // SiteScript adds .is-playing and `controls` when the visitor presses play.
    <div className="player" data-player suppressHydrationWarning>
      <video
        src={m.video}
        poster={poster}
        preload="none"
        playsInline
        width={img.width}
        height={img.height}
        aria-label={m.alt}
        suppressHydrationWarning
      />
      <button type="button" className="player-btn" data-play>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.5 5.8v12.4L18.5 12z" fill="currentColor" />
        </svg>
        <span>
          {label}
          {m.duration ? ` · ${m.duration}` : ""}
        </span>
      </button>
    </div>
  );
}
