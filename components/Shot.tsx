import manifest from "@/content/image-manifest.json";

type Entry = { width: number; height: number; widths: number[] };
const images = manifest as Record<string, Entry>;

/**
 * A screenshot from public/work, served as responsive WebP. Sizes come from
 * content/image-manifest.json (written by `npm run images`), so the browser
 * reserves the right space before the image arrives.
 */
export default function Shot({
  src,
  alt,
  sizes,
  eager = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  const img = images[src];
  if (!img) throw new Error(`Unknown image "${src}" — add it to assets/shots and run npm run images`);

  const fallback = img.widths.find((w) => w >= 1200) ?? img.widths[img.widths.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, pre-optimised
    <img
      src={`/work/${src}-${fallback}.webp`}
      srcSet={img.widths.map((w) => `/work/${src}-${w}.webp ${w}w`).join(", ")}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
}
