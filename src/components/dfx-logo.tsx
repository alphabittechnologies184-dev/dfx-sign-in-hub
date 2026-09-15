type DfxLogoProps = {
  /** Show the "DFX" wordmark next to the mark */
  showWordmark?: boolean;
  /** Pixel size of the mark (square) */
  size?: number;
  className?: string;
  /** "onPrimary" swaps to a light-on-dark treatment for use over the brand panel */
  variant?: "default" | "onPrimary";
};

/**
 * DFX lettermark logo.
 *
 * A faceted diamond-glyph mark set in a rounded square, paired with a refined
 * "DFX" wordmark. The mark references fine jewellery craft (a cut stone)
 * without leaning on literal gold — it inherits the brand accent token so it
 * adapts to light/dark and to the brand-panel treatment.
 */
export function DfxLogo({
  showWordmark = true,
  size = 40,
  className,
  variant = "default",
}: DfxLogoProps) {
  const onPrimary = variant === "onPrimary";
  const markFg = onPrimary ? "var(--primary-foreground)" : "var(--primary)";
  const markStroke = onPrimary
    ? "color-mix(in oklab, var(--primary-foreground) 55%, transparent)"
    : "color-mix(in oklab, var(--primary) 60%, transparent)";
  const facetLight = onPrimary
    ? "color-mix(in oklab, var(--primary-foreground) 28%, transparent)"
    : "color-mix(in oklab, var(--primary) 22%, transparent)";
  const facetDark = onPrimary
    ? "color-mix(in oklab, var(--primary-foreground) 12%, transparent)"
    : "color-mix(in oklab, var(--primary) 10%, transparent)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* rounded badge */}
        <rect
          x="1.5"
          y="1.5"
          width="45"
          height="45"
          rx="13"
          fill={markFg}
          fillOpacity={onPrimary ? "0.16" : "0.12"}
          stroke={markFg}
          strokeOpacity="0.35"
          strokeWidth="1.4"
        />
        {/* faceted diamond / "D" cut motif */}
        <g transform="translate(24 24)">
          {/* outer outline */}
          <path
            d="M0 -13 L13 -3 L0 13 L-13 -3 Z"
            fill="none"
            stroke={markFg}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          {/* top facet */}
          <path
            d="M0 -13 L0 -3 L-13 -3 Z"
            fill={facetLight}
          />
          <path d="M0 -13 L0 -3 L13 -3 Z" fill={facetDark} />
          {/* crown line */}
          <path
            d="M-13 -3 L13 -3"
            stroke={markStroke}
            strokeWidth="1.1"
            strokeLinecap="round"
          />
          {/* pavilion */}
          <path d="M0 -3 L0 13 L-13 -3 Z" fill={facetDark} />
          <path d="M0 -3 L0 13 L13 -3 Z" fill={facetLight} />
          {/* center sparkle */}
          <circle cx="0" cy="-3" r="1.6" fill={markFg} />
        </g>
      </svg>
      {showWordmark ? (
        <span
          className="font-display font-semibold tracking-[0.14em] text-foreground"
          style={{ fontSize: size * 0.5 }}
        >
          DFX
        </span>
      ) : null}
    </span>
  );
}

export default DfxLogo;
