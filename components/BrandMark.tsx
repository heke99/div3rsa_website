import brand from "@/lib/brand.json";

type Props = { className?: string; size?: number; primary?: string; secondary?: string };

/** The same existing mark is used in the header, favicon exports and share artwork. */
export function BrandMark({ className, size = 36, primary = "currentColor", secondary }: Props) {
  return (
    <svg className={className} viewBox={`0 0 ${brand.viewBox} ${brand.viewBox}`} width={size} height={size} aria-hidden="true" focusable="false">
      {brand.primary.map(([x, y, width, height], index) => (
        <rect key={`primary-${index}`} x={x} y={y} width={width} height={height} fill={primary} />
      ))}
      {brand.secondary.map(([x, y, width, height], index) => (
        <rect key={`secondary-${index}`} x={x} y={y} width={width} height={height} fill={secondary ?? primary} opacity={secondary ? 1 : 0.45} />
      ))}
    </svg>
  );
}
