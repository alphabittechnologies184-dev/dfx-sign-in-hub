type DfxLogoProps = {
  /** Height of the wordmark in px (letterform cap height scales from this) */
  size?: number;
  /** Show the small tagline under the wordmark */
  showTagline?: boolean;
  className?: string;
};

/**
 * DFX lettermark.
 *
 * A typographic wordmark: heavy geometric "DF", with the "X" split into a dark
 * stroke and a champagne stroke that reads as a cut facet. Drawn as vector
 * paths so it stays crisp at any size and never depends on a loaded webfont.
 */
export function DfxLogo({ size = 52, showTagline = true, className }: DfxLogoProps) {
  return (
    <span className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <svg
        height={size}
        viewBox="0 0 286 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DFX"
        style={{ width: (size * 286) / 76 }}
      >
        {/* D */}
        <path
          d="M4 6h30c19.9 0 33 13.6 33 32s-13.1 32-33 32H4V6Zm16 13.5v37h13c11 0 17.6-7.1 17.6-18.5S44 19.5 33 19.5H20Z"
          fill="currentColor"
        />
        {/* F */}
        <path
          d="M78 6h47v13.6H94v13.2h27.5v13.4H94V70H78V6Z"
          fill="currentColor"
        />
        {/* X — dark stroke */}
        <path d="M141 6h20l41 64h-20L141 6Z" fill="currentColor" />
        {/* X — champagne facet stroke */}
        <path
          d="M202 6h20l-41 64h-20L202 6Z"
          fill="url(#dfx-facet)"
        />
        {/* trademark tick */}
        <path
          d="M230 8h13v3h-5v12h-3V11h-5V8Zm16 0h4l4 8 4-8h4v15h-3V13l-4 8h-2l-4-8v10h-3V8Z"
          fill="currentColor"
          opacity="0.55"
        />
        <defs>
          <linearGradient id="dfx-facet" x1="161" y1="70" x2="222" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--gold-deep)" />
            <stop offset="0.55" stopColor="var(--gold)" />
            <stop offset="1" stopColor="var(--gold-light)" />
          </linearGradient>
        </defs>
      </svg>

      {showTagline ? (
        <span
          className="mt-3 text-[0.6rem] font-medium uppercase text-foreground/60"
          style={{ letterSpacing: "0.32em" }}
        >
          Jewellery Business Software
        </span>
      ) : null}
    </span>
  );
}

export default DfxLogo;
