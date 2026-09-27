/**
 * Decorative barcode. Bars are derived from `value`, so every receipt gets its
 * own pattern and the same one on every build (no hydration drift).
 */
export default function Barcode({ value, className }: { value: string; className?: string }) {
  let seed = 7;
  for (const ch of value) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = (n: number) => {
    seed = (Math.imul(seed, 1103515245) + 12345) >>> 0;
    return (seed >>> 16) % n;
  };

  const bars: { x: number; w: number }[] = [];
  let x = 0;
  const bar = (w: number, gap: number) => {
    bars.push({ x, w });
    x += w + gap;
  };
  bar(1, 1);
  bar(1, 2);
  for (let i = 0; i < 40; i++) bar(1 + rand(3), 1 + rand(2));
  bar(1, 1);
  bar(1, 0);

  return (
    <svg
      viewBox={`0 0 ${x + 1} 10`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={0} width={b.w} height={10} fill="currentColor" />
      ))}
    </svg>
  );
}
