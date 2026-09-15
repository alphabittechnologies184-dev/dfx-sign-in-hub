type DfxLogoProps = {
  /** Height of the wordmark in px */
  size?: number;
  /** Show the small tagline under the wordmark */
  showTagline?: boolean;
  className?: string;
};

/**
 * DFX lettermark.
 *
 * Custom geometric letterforms drawn as vector paths: a squared "D" with a
 * sharp inner counter, a clipped "F", and an "X" whose rising stroke is cut in
 * champagne with a hairline gap where the strokes meet — a facet, not a gem.
 * Font-independent, so it stays identical everywhere.
 */
export function DfxLogo({ size = 52, showTagline = true, className }: DfxLogoProps) {
  return (
    <span className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <svg
        height={size}
        viewBox="0 0 300 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="DFX"
        style={{ width: (size * 300) / 80 }}
      >
        {/* D — squared bowl with a chamfered top-right corner */}
        <path
          d="M2 8h34c21.6 0 36 12.9 36 32S57.6 72 36 72H2V8Zm17 14.6v34.8h16c11.8 0 19-6.6 19-17.4S54.8 22.6 43 22.6H19Z"
          fill="currentColor"
        />
        {/* F — with a chamfer cut on the top-right, echoing a facet */}
        <path
          d="M84 8h50l-11 14.6h-22v12.6h27.5l-10.6 14H101V72H84V8Z"
          fill="currentColor"
        />
        {/* X — falling stroke (dark) */}
        <path d="M146 8h22l50 64h-22L146 8Z" fill="currentColor" />
        {/* X — rising stroke (champagne), separated by a hairline gap */}
        <path
          d="M196 8h22l-50 64h-22L196 8Z"
          fill="url(#dfx-facet)"
          stroke="var(--card)"
          strokeWidth="4.5"
          strokeLinejoin="round"
          paintOrder="stroke"
        />
        {/* trademark */}
        <path
          d="M232 10h12v3.2h-4.4V25h-3.3V13.2H240V10Zm7 0h4.1l3.7 7.6 3.7-7.6h4.1v15h-3.1V15.6l-3.5 7.2h-2.4l-3.5-7.2V25H255V10Z"
          fill="currentColor"
          opacity="0.5"
        />
        <defs>
          <linearGradient
            id="dfx-facet"
            x1="166"
            y1="72"
            x2="230"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--gold-deep)" />
            <stop offset="0.5" stopColor="var(--gold)" />
            <stop offset="1" stopColor="var(--gold-light)" />
          </linearGradient>
        </defs>
      </svg>

      {showTagline ? (
        <span
          className="mt-3.5 text-[0.6rem] font-medium uppercase text-foreground/60"
          style={{ letterSpacing: "0.3em" }}
        >
          Jewellery Business Software
        </span>
      ) : null}
    </span>
  );
}

export default DfxLogo;
