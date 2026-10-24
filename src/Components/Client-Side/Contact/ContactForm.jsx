"use client";

import { useState } from "react";
import api from "@/lib/axios";

export default function ContactForm() {
  const [form, setForm] = useState({ fullName: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await api.post("/contacts", form);
      setSuccess(true);
      setForm({ fullName: "", phone: "", email: "", message: "" });
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-[#383838]" aria-labelledby="contact-form-heading">
      <div className="md:mx-12 bg-[#2F2F2F] border border-neutral-600 rounded-sm p-9 md:p-10">
        <h2 id="contact-form-heading" className="text-2xl font-manrope md:text-3xl font-bold mb-2 text-white">
          Send Us a Message
        </h2>
        <p className="text-gray-400 max-w-sm mt-3 leading-7 text-sm mb-8">
          Fill out the form below and our team will get back to you as soon as possible.
        </p>

        {success && (
          <div className="mb-6 px-4 py-3 rounded-md bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-manrope">
            Your message has been sent! We'll get back to you shortly.
          </div>
        )}

        {error && (
          <div className="mb-6 px-4 py-3 rounded-md bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-manrope">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <form
            onSubmit={handleSubmit}
            className="md:col-span-2 space-y-6 md:space-y-4"
            noValidate
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="sr-only" htmlFor="full-name">Full Name</label>
              <input
                id="full-name"
                type="text"
                name="fullName"
                placeholder="Full Name"
                autoComplete="name"
                required
                value={form.fullName}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF]/2 border border-[#FFFFFF]/15 px-6 py-4 text-md text-[#FFFFFF]/40 placeholder-[#737373] focus:outline-none focus:border-gray-400 transition"
              />

              <label className="sr-only" htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF]/2 border border-[#FFFFFF]/15 px-6 py-4 text-md text-[#FFFFFF]/40 placeholder-[#737373] focus:outline-none focus:border-gray-400 transition"
              />
            </div>

            <label className="sr-only" htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#FFFFFF]/2 border border-[#FFFFFF]/15 px-6 py-4 text-md text-[#FFFFFF]/40 placeholder-[#737373] focus:outline-none focus:border-gray-400 transition"
            />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={7}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-[#FFFFFF]/2 border border-[#FFFFFF]/15 px-6 py-4 text-md text-[#FFFFFF]/40 placeholder-[#737373] focus:outline-none focus:border-gray-400 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-white text-[#383838] px-8 py-2.5 rounded-full text-md font-semibold hover:bg-gray-200 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          <aside className="bg-[#FFFFFF] text-black rounded-sm max-h-88" aria-label="Contact information">
            <div className="p-5">
              <h3 className="text-xl text-[#1E1E1E] font-manrope mt-2 md:mt-10 font-bold mb-2">Contact Info</h3>
              <p className="text-sm text-[#1E1E1E] font-manrope">
                Write to us and let&apos;s talk about your project
              </p>
            </div>

            <hr className="text-gray-300" />

            <ul className="space-y-5 p-5 list-none m-0">
              <li className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D2D2D2] flex items-center justify-center shrink-0" aria-hidden="true">
                  <img src="/Images/contact/phone.webp" className="w-6 h-6" alt="" />
                </div>
                <div>
                  <div className="font-bold text-[#1E1E1E] font-manrope text-sm">Phone Number</div>
                  <a href="tel:+15306732116" className="text-sm font-manrope text-gray-600 hover:underline">
                    +1 (530) 673-2116
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1E1E1E] flex items-center justify-center shrink-0" aria-hidden="true">
                  <img src="/Images/contact/email.webp" className="w-5 h-5" alt="" />
                </div>
                <div>
                  <div className="font-semibold font-manrope text-[#1E1E1E] text-sm">Email Address</div>
                  <a href="mailto:info@hbtinc.org" className="text-sm font-manrope text-gray-600 hover:underline">
                    info@hbtinc.org
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}