"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.replace("/admin");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="flex flex-col items-center mb-10">
          <img
            src="/Images/logo.webp"
            alt="HB Transportation Logo"
            className="h-20 w-20 object-contain"
          />
          <h1 className="text-white font-manrope text-2xl font-bold mt-4">
            HB Transportation
          </h1>
          <p className="text-gray-400 text-sm font-manrope mt-1">
            Admin Portal
          </p>
        </div>

        <div className="bg-neutral-800/60 border border-neutral-700 rounded-xl px-8 py-10">
          <h2 className="text-white font-manrope text-xl font-semibold mb-6">
            Sign In
          </h2>

          {error && (
            <div className="mb-5 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-manrope">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm font-manrope mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="admin@hbtinc.org"
                className="w-full bg-neutral-900/60 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-gray-600 rounded-lg focus:outline-none focus:border-gray-400 transition font-manrope"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm font-manrope mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full bg-neutral-900/60 border border-neutral-700 px-4 py-3 text-sm text-white placeholder-gray-600 rounded-lg focus:outline-none focus:border-gray-400 transition font-manrope"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-white text-[#1E1E1E] font-manrope font-semibold text-sm py-3 rounded-full hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs font-manrope mt-6">
          © {new Date().getFullYear()} HB Transportation. All rights reserved.
        </p>
      </div>
    </main>
  );
}