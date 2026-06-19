"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/stores/auth-store";
import PhosphorIcon from "@/components/shared/PhosphorIcon";

export default function DesktopAuth() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);

  const [tab, setTab] = useState<"signin" | "register">("signin");

  const [signinEmail, setSigninEmail] = useState("");
  const [signinPw, setSigninPw] = useState("");
  const [signinEmailErr, setSigninEmailErr] = useState(false);
  const [signinPwErr, setSigninPwErr] = useState(false);
  const [signinProcessing, setSigninProcessing] = useState(false);
  const [signinError, setSigninError] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPw, setRegPw] = useState("");
  const [regNameErr, setRegNameErr] = useState(false);
  const [regEmailErr, setRegEmailErr] = useState(false);
  const [regPwErr, setRegPwErr] = useState(false);
  const [regProcessing, setRegProcessing] = useState(false);
  const [regError, setRegError] = useState("");

  const [pwVisible, setPwVisible] = useState(false);

  const switchTab = (t: "signin" | "register") => {
    setTab(t);
    setSigninError("");
    setRegError("");
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setSigninEmailErr(false);
    setSigninPwErr(false);
    setSigninError("");

    const emailValid = signinEmail.trim().length > 0;
    const pwValid = signinPw.trim().length > 0;
    if (!emailValid) setSigninEmailErr(true);
    if (!pwValid) setSigninPwErr(true);
    if (!emailValid || !pwValid) return;

    setSigninProcessing(true);
    setTimeout(() => {
      const result = login(signinEmail.trim(), signinPw);
      if (result.success) {
        router.push("/compte");
      } else {
        setSigninError(result.error || "Something went wrong");
        setSigninProcessing(false);
      }
    }, 1200);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegNameErr(false);
    setRegEmailErr(false);
    setRegPwErr(false);
    setRegError("");

    const nameValid = regName.trim().length > 0;
    const emailValid = regEmail.trim().length > 0 && regEmail.includes("@");
    const pwValid = regPw.length >= 8;
    if (!nameValid) setRegNameErr(true);
    if (!emailValid) setRegEmailErr(true);
    if (!pwValid) setRegPwErr(true);
    if (!nameValid || !emailValid || !pwValid) return;

    setRegProcessing(true);
    setTimeout(() => {
      const result = register(regName.trim(), regEmail.trim(), regPw);
      if (result.success) {
        router.push("/compte");
      } else {
        setRegError(result.error || "Something went wrong");
        setRegProcessing(false);
      }
    }, 1200);
  };

  const inputClass =
    "w-full bg-surface-container-low border-none rounded focus:ring-1 focus:ring-primary h-12 px-4 font-body-md text-body-md text-primary placeholder:text-secondary-fixed-dim transition-shadow";

  return (
    <main className="flex flex-1 min-h-dvh">
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-primary text-on-primary px-margin-desktop py-16">
        <div>
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary/50 mb-6">Members</p>
          <h2 className="font-display-lg text-display-lg text-on-primary leading-tight max-w-xs">
            Crafted for those who demand the best.
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-primary/60 max-w-xs">
          Access exclusive collections, early releases, and personalised curation.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-margin-mobile lg:px-margin-desktop py-16">
        <div className="w-full max-w-sm">
          <div className="flex border-b border-surface-container mb-8">
            <button
              onClick={() => switchTab("signin")}
              className={`flex-1 pb-4 border-b-2 text-center font-label-sm text-label-sm uppercase tracking-widest transition-colors ${
                tab === "signin"
                  ? "border-primary text-primary"
                  : "border-transparent text-secondary hover:text-primary"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => switchTab("register")}
              className={`flex-1 pb-4 border-b-2 text-center font-label-sm text-label-sm uppercase tracking-widest transition-colors ${
                tab === "register"
                  ? "border-primary text-primary"
                  : "border-transparent text-secondary hover:text-primary"
              }`}
            >
              Create Account
            </button>
          </div>

          {tab === "signin" && (
            <div>
              <form onSubmit={handleSignIn} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest" htmlFor="d-signin-email">
                    Email Address
                  </label>
                  <input
                    id="d-signin-email"
                    className={inputClass}
                    placeholder="your@email.com"
                    type="email"
                    autoComplete="email"
                    value={signinEmail}
                    onChange={(e) => setSigninEmail(e.target.value)}
                    disabled={signinProcessing}
                  />
                  {signinEmailErr && <span className="text-error font-label-sm text-[10px]">Email required</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline">
                    <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest" htmlFor="d-signin-pw">
                      Password
                    </label>
                    <a className="font-label-sm text-label-sm text-secondary hover:text-primary underline transition-colors" href="#">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      id="d-signin-pw"
                      className={inputClass}
                      placeholder="••••••••"
                      type={pwVisible ? "text" : "password"}
                      autoComplete="current-password"
                      value={signinPw}
                      onChange={(e) => setSigninPw(e.target.value)}
                      disabled={signinProcessing}
                    />
                    <button
                      type="button"
                      onClick={() => setPwVisible(!pwVisible)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
                      aria-label={pwVisible ? "Hide password" : "Show password"}
                    >
                      <PhosphorIcon icon={pwVisible ? "close" : "remove"} size={18} />
                    </button>
                  </div>
                  {signinPwErr && <span className="text-error font-label-sm text-[10px]">Password required</span>}
                </div>
                {signinError && <p className="text-error font-label-sm text-[11px] text-center">{signinError}</p>}
                <button
                  type="submit"
                  disabled={signinProcessing}
                  className={`w-full h-12 mt-2 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 ${
                    signinProcessing ? "opacity-70" : "hover:opacity-90 active:scale-95"
                  }`}
                >
                  {signinProcessing ? (
                    <><PhosphorIcon icon="progress_activity" className="animate-spin" size={18} /><span>Signing in…</span></>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              <div className="mt-8 flex flex-col items-center gap-4">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Or continue with</span>
                <button
                  onClick={() => router.push("/compte")}
                  className="w-full h-12 border border-surface-container rounded flex items-center justify-center gap-3 hover:bg-surface-container-low transition-colors active:scale-95 duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-body-md text-body-md text-primary">Google</span>
                </button>
              </div>
            </div>
          )}

          {tab === "register" && (
            <div>
              <form onSubmit={handleRegister} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest" htmlFor="d-reg-name">
                    Full Name
                  </label>
                  <input
                    id="d-reg-name"
                    className={inputClass}
                    placeholder="Julian Vance"
                    type="text"
                    autoComplete="name"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    disabled={regProcessing}
                  />
                  {regNameErr && <span className="text-error font-label-sm text-[10px]">Name required</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest" htmlFor="d-reg-email">
                    Email Address
                  </label>
                  <input
                    id="d-reg-email"
                    className={inputClass}
                    placeholder="your@email.com"
                    type="email"
                    autoComplete="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    disabled={regProcessing}
                  />
                  {regEmailErr && <span className="text-error font-label-sm text-[10px]">Valid email required</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm text-secondary uppercase tracking-widest" htmlFor="d-reg-pw">
                    Password
                  </label>
                  <input
                    id="d-reg-pw"
                    className={inputClass}
                    placeholder="Min. 8 characters"
                    type="password"
                    autoComplete="new-password"
                    value={regPw}
                    onChange={(e) => setRegPw(e.target.value)}
                    disabled={regProcessing}
                  />
                  {regPwErr && <span className="text-error font-label-sm text-[10px]">Min. 8 characters</span>}
                </div>
                {regError && <p className="text-error font-label-sm text-[11px] text-center">{regError}</p>}
                <button
                  type="submit"
                  disabled={regProcessing}
                  className={`w-full h-12 mt-2 bg-primary text-on-primary rounded font-label-sm text-label-sm uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 ${
                    regProcessing ? "opacity-70" : "hover:opacity-90 active:scale-95"
                  }`}
                >
                  {regProcessing ? (
                    <><PhosphorIcon icon="progress_activity" className="animate-spin" size={18} /><span>Creating account…</span></>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              <div className="mt-8 flex flex-col items-center gap-4">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">Or sign up with</span>
                <button
                  onClick={() => router.push("/compte")}
                  className="w-full h-12 border border-surface-container rounded flex items-center justify-center gap-3 hover:bg-surface-container-low transition-colors active:scale-95 duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-body-md text-body-md text-primary">Google</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
