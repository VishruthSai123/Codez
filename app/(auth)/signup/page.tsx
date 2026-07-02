"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader2, Mail, Lock, User } from "lucide-react";

import { createClient } from "@/lib/supabase/client";

const SignUpPage = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: displayName,
          },
        },
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  // Success state
  if (success) {
    return (
      <div className="w-full max-w-md px-4">
        <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-8 w-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-extrabold tracking-wide text-neutral-800">
              Check your email!
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              We&apos;ve sent a confirmation link to{" "}
              <span className="font-semibold text-neutral-700">{email}</span>.
              <br />
              Click the link to activate your account.
            </p>

            <div className="mt-6 w-full">
              <Link
                href="/login"
                className="flex h-12 w-full items-center justify-center rounded-xl border-2 border-slate-200 border-b-4 bg-white text-sm font-bold uppercase tracking-wide text-slate-500 transition-colors hover:bg-slate-100 active:border-b-2"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md px-4">
      <div className="rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
        {/* Logo & Title */}
        <div className="mb-8 flex flex-col items-center">
          <Image
            src="/mascot.svg"
            alt="Codez Mascot"
            width={60}
            height={60}
            className="mb-4"
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-neutral-800">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Start your coding journey today
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Display Name */}
          <div className="space-y-2">
            <label
              htmlFor="displayName"
              className="block text-sm font-bold uppercase tracking-wide text-slate-700"
            >
              Display Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your name"
                required
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-neutral-800 placeholder:text-slate-400 transition-colors focus:border-green-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-bold uppercase tracking-wide text-slate-700"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-neutral-800 placeholder:text-slate-400 transition-colors focus:border-green-500 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-bold uppercase tracking-wide text-slate-700"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="h-12 w-full rounded-xl border-2 border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-neutral-800 placeholder:text-slate-400 transition-colors focus:border-green-500 focus:bg-white focus:outline-none"
              />
            </div>
            <p className="text-xs text-slate-400">
              Must be at least 6 characters
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl border-b-4 border-green-600 bg-green-500 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-green-500/90 active:border-b-0 disabled:opacity-60 disabled:pointer-events-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating account…
              </span>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            or
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Link to login */}
        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-green-500 hover:text-green-600 transition-colors"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
