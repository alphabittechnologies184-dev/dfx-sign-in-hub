import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { DfxLogo } from "@/components/dfx-logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in — DFX | Jewellery Operating System" },
      {
        name: "description",
        content:
          "Sign in to DFX — the operating system for modern jewellery businesses.",
      },
      { property: "og:title", content: "Sign in — DFX | Jewellery Operating System" },
      {
        property: "og:description",
        content:
          "Sign in to DFX — the operating system for modern jewellery businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) {
      next.email = "Email is required";
    } else if (!emailRegex.test(email.trim())) {
      next.email = "Enter a valid email address";
    }
    if (!password) {
      next.password = "Password is required";
    } else if (password.length < 6) {
      next.password = "Password must be at least 6 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Design-only: simulate a non-functional submit (no backend).
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <div className="min-h-screen w-full bg-background text-foreground lg:grid lg:grid-cols-[1.05fr_1fr]">
      {/* Brand panel — desktop only */}
      <aside className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between p-12 text-primary-foreground">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 15%, color-mix(in oklab, var(--primary-foreground) 60%, transparent) 0, transparent 42%), radial-gradient(circle at 85% 80%, color-mix(in oklab, var(--primary-foreground) 50%, transparent) 0, transparent 45%)",
          }}
        />
        {/* decorative fine-line motif */}
        <svg
          className="pointer-events-none absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-25"
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          aria-hidden="true"
        >
          <g
            stroke="var(--primary-foreground)"
            strokeWidth="0.75"
            fill="none"
            opacity="0.7"
          >
            <circle cx="210" cy="210" r="200" />
            <circle cx="210" cy="210" r="150" />
            <circle cx="210" cy="210" r="100" />
            <path d="M10 210 L410 210 M210 10 L210 410 M70 70 L350 350 M350 70 L70 350" />
          </g>
        </svg>

        <div className="relative z-10">
          <DfxLogo size={44} variant="onPrimary" />
        </div>

        <div className="relative z-10 max-w-md">
          <p className="font-display text-3xl leading-tight font-semibold tracking-tight">
            The operating system for modern jewellery businesses.
          </p>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Inventory, orders, and client relationships — unified in one
            quietly powerful workspace.
          </p>
        </div>

        <div className="relative z-10 text-xs text-primary-foreground/60">
          © 2026 DFX. Crafted for jewellers.
        </div>
      </aside>

      {/* Login card */}
      <main className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-sm">
          {/* mobile logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <DfxLogo size={44} />
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-premium sm:p-8">
            <div className="mb-1.5 text-center">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Sign in to your DFX workspace
              </p>
            </div>

            <form noValidate onSubmit={onSubmit} className="mt-7 space-y-4">
              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-foreground/80"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@studio.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-ring/40 data-[invalid=true]:border-destructive"
                  data-invalid={!!errors.email}
                />
                {errors.email ? (
                  <p id="email-error" className="text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium text-foreground/80"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((p) => ({ ...p, password: undefined }));
                    }}
                    aria-invalid={!!errors.password}
                    aria-describedby={
                      errors.password ? "password-error" : undefined
                    }
                    className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 pr-11 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-ring/40 data-[invalid=true]:border-destructive"
                    data-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.8 2.8M9.4 5.1A10.5 10.5 0 0 1 12 5c5 0 9 4.5 9 7s-1.2 3.6-3.1 5M6.1 7.6C3.8 9 2.5 10.7 2.5 12c0 2.5 4 7 9.5 7 1.2 0 2.4-.2 3.5-.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password ? (
                  <p id="password-error" className="text-xs text-destructive">
                    {errors.password}
                  </p>
                ) : null}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
                      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Signing in…
                  </>
                ) : status === "success" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Signed in
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {status === "success" ? (
              <p className="mt-4 text-center text-xs text-muted-foreground">
                This is a design preview — no real session was created.
              </p>
            ) : null}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By signing in you agree to our{" "}
            <span className="font-medium text-foreground/70">Terms</span> &{" "}
            <span className="font-medium text-foreground/70">Privacy Policy</span>.
          </p>
        </div>
      </main>
    </div>
  );
}
