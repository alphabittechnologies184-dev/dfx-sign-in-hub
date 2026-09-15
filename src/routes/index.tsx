import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { DfxLogo } from "@/components/dfx-logo";
import loginBg from "@/assets/login-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sign in — DFX | Jewellery Business Software" },
      {
        name: "description",
        content:
          "Sign in to DFX — the operating system for modern jewellery businesses. Inventory, orders and client relationships in one workspace.",
      },
      { property: "og:title", content: "Sign in — DFX | Jewellery Business Software" },
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
  const [errors, setErrors] = useState<{
    email?: string | undefined;
    password?: string | undefined;
  }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const next: { email?: string | undefined; password?: string | undefined } = {};
    if (!email.trim()) next.email = "Email is required";
    else if (!emailRegex.test(email.trim())) next.email = "Enter a valid email address";
    if (!password) next.password = "Password is required";
    else if (password.length < 6) next.password = "Password must be at least 6 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Design-only: simulated submit, no backend.
    window.setTimeout(() => setStatus("success"), 900);
  }

  const fieldBase =
    "w-full rounded-xl border border-border/70 bg-background/70 py-3 pl-11 text-[0.9rem] text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-gold/70 focus:bg-background focus:ring-4 focus:ring-gold/15 data-[invalid=true]:border-destructive/70 data-[invalid=true]:focus:ring-destructive/15";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background scene */}
      <img
        src={loginBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/55 to-background/25" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_45%,transparent_35%,oklch(0.2_0.02_60/0.28)_100%)]" />

      {/* Ambient corner detail — desktop */}
      <div className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="block h-px w-10 bg-gold" />
        <p
          className="mt-5 text-[0.65rem] font-medium uppercase leading-[2.1] text-foreground/70"
          style={{ letterSpacing: "0.3em" }}
        >
          Built for
          <br />
          modern
          <br />
          jewellery
          <br />
          businesses
        </p>
      </div>
      <div className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 text-right xl:block">
        <p
          className="text-[0.65rem] font-medium uppercase leading-[2.1] text-foreground/70"
          style={{ letterSpacing: "0.3em" }}
        >
          Trust
          <br />
          Relationships
          <br />
          Growth
        </p>
        <span className="mt-5 ml-auto block h-px w-10 bg-gold" />
      </div>

      {/* Centred card */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-5 py-14">
        <div className="w-full max-w-[26.5rem]">
          <div className="rounded-[1.75rem] border border-white/45 bg-card/80 p-8 shadow-glass backdrop-blur-xl sm:p-10">
            <div className="flex flex-col items-center text-center">
              <DfxLogo size={50} />

              <h1 className="mt-8 font-display text-[1.9rem] font-semibold leading-tight tracking-tight text-foreground">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Sign in to access your DFX account
              </p>
            </div>

            <form noValidate onSubmit={onSubmit} className="mt-8 space-y-3.5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-muted-foreground">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
                      <path d="m4 8 7.1 4.7a2 2 0 0 0 2.2 0L20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    data-invalid={!!errors.email}
                    className={`${fieldBase} pr-4`}
                  />
                </div>
                {errors.email ? (
                  <p id="email-error" className="mt-1.5 pl-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-muted-foreground">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="4" y="10" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors((p) => ({ ...p, password: undefined }));
                    }}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    data-invalid={!!errors.password}
                    className={`${fieldBase} pr-12`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
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
                  <p id="password-error" className="mt-1.5 pl-1 text-xs text-destructive">
                    {errors.password}
                  </p>
                ) : null}
              </div>

              <div className="flex justify-end pt-0.5">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-medium text-gold-deep underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all hover:brightness-125 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/25 disabled:cursor-not-allowed disabled:opacity-85"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
                      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    Signing In…
                  </>
                ) : status === "success" ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Signed In
                  </>
                ) : (
                  <>
                    Sign In
                    <svg
                      className="transition-transform group-hover:translate-x-1"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                Secure access
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-gold-deep">
                <path d="M12 3l7 3v5.5c0 4.3-2.9 7.9-7 9.5-4.1-1.6-7-5.2-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 12.2l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Your data is secured with enterprise-grade encryption.
            </p>

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

      {/* Footer */}
      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden items-center justify-between px-10 pb-6 text-[0.7rem] text-foreground/55 sm:flex">
        <span>© 2026 DFX. All rights reserved.</span>
        <span className="flex items-center gap-4">
          <span>Privacy</span>
          <span className="text-foreground/25">|</span>
          <span>Terms</span>
          <span className="text-foreground/25">|</span>
          <span>Support</span>
        </span>
      </footer>
    </div>
  );
}
