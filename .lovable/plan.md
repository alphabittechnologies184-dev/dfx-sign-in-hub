# DFX Login Page — Plan

## Goal
A single, production-quality login page for the **DFX** jewellery operating system (SaaS). Email + password only. No backend, no functional auth — a polished design-only page.

## Brand & visual direction
- **DFX** is a jewellery operating system. Tone: refined, premium, but **not gold-heavy** — warm neutrals with a restrained accent.
- **Visual style: Soft premium** — warm off-white/cream backgrounds, rounded forms, generous whitespace, an elegant sans-serif heading paired with a clean body, soft shadows, no harsh contrast.
- **Logo: Lettermark** — a stylized "DFX" mark. Built as a crisp inline SVG component (scales perfectly, no image credits spent). Rendered beside the "DFX" wordmark in the login card and as a larger mark above the form.

## Page structure (single screen, centered)
1. **Split layout** on desktop: left brand panel, right login card. Collapses to a single centered card on mobile/tablet.
   - **Left brand panel** (desktop only): warm gradient/texture, large DFX mark, a one-line product tagline ("The operating system for modern jewellery businesses"), subtle decorative line motif evoking fine craft — no literal gold.
   - **Right login card**: centered, soft elevated card.
2. **Login card contents**:
   - DFX logo (SVG lettermark + wordmark) at top
   - Heading: "Welcome back"
   - Subtext: "Sign in to your DFX workspace"
   - Email field (label + input, email validation styling)
   - Password field (label + input + show/hide toggle)
   - "Forgot password?" link (anchor, no functionality — scrolls nowhere / styled link)
   - "Sign in" primary button (full-width, premium styling)
   - Footer microcopy: "By signing in you agree to our Terms & Privacy Policy" (static text)
3. **Form behavior**: fully client-side only. On submit, show a brief loading state then a disabled success state — **no real auth**. Validation: required fields + email format, inline error messages.

## Design tokens (added to `src/styles.css`)
- Warm neutral palette in oklch: cream background, soft foreground, a muted primary accent (e.g. a warm bronze/champagne, not bright gold), subtle borders.
- Keep within the existing token system (`--background`, `--foreground`, `--primary`, `--primary-foreground`, `--card`, `--border`, `--input`, `--ring`, etc.) so dark mode stays consistent.
- Premium soft shadow utility for the card.

## Files to create / change
- `src/routes/index.tsx` — replace the placeholder with the full login page (this **is** the page, served at `/`).
- `src/components/dfx-logo.tsx` — inline SVG lettermark + wordmark component.
- `src/styles.css` — add the warm "soft premium" token values (light + dark) and a premium shadow utility.
- `src/routes/__root.tsx` — update the root head `title`/`description`/og tags to DFX-specific values (not "Lovable App"). No og:image (no absolute cover image).
- `src/routes/index.tsx` `head()` — unique DFX title + description for the login page (e.g. "Sign in — DFX | Jewellery Operating System").

## Out of scope
- No backend, no Supabase/Cloud, no real authentication, no password reset logic.
- No dashboard or post-login screens.
- No image generation (logo is SVG to avoid spending credits).

## Definition of done
- `/` renders a single, polished DFX login page with lettermark logo, email + password fields, and a soft-premium aesthetic in both light and dark mode.
- Form validates input and shows a non-functional submit state; no backend calls.
- Build is clean (checked via build-errors log).
