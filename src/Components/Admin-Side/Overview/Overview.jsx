"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import api from "@/lib/axios";

export default function Overview({ setActiveItem }) {
  const [quoteStats, setQuoteStats] = useState({ total: 0, unread: 0, read: 0 });
  const [contactStats, setContactStats] = useState({ total: 0, unread: 0, read: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([api.get("/quotes"), api.get("/contacts")])
      .then(([{ data: quotes }, { data: contacts }]) => {
        setQuoteStats({
          total: quotes.length,
          unread: quotes.filter((q) => q.status === "unread").length,
          read: quotes.filter((q) => q.status === "read").length,
        });
        setContactStats({
          total: contacts.length,
          unread: contacts.filter((c) => c.status === "unread").length,
          read: contacts.filter((c) => c.status === "read").length,
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-manrope font-semibold text-gray-800">Welcome back, Admin 👋</h2>

      {loading ? (
        <div className="text-sm text-gray-400 font-manrope">Loading stats...</div>
      ) : (
        <>
          <div>
            <h3 className="text-sm font-manrope font-medium text-gray-500 mb-3">Quote Requests</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Total", value: quoteStats.total, color: "bg-blue-50 text-blue-600" },
                { label: "Unread", value: quoteStats.unread, color: "bg-orange-50 text-orange-600" },
                { label: "Read", value: quoteStats.read, color: "bg-green-50 text-green-600" },
              ].map((s) => (
                <div key={s.label} className={`rounded-xl p-5 ${s.color}`}>
                  <p className="text-sm font-manrope font-medium opacity-75">{s.label}</p>
                  <p className="text-3xl font-bold mt-1">{s.value}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveItem("quotes")}
              className="mt-3 flex items-center gap-2 text-sm font-manrope text-[#1E1E1E] font-medium hover:underline"
            >
              View all quote requests <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h3 className="text-sm font-manrope font-medium text-gray-500 mb-3">Contact Messages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Total", value: contactStats.total, color: "bg-blue-50 text-blue-600" },
                { label: "Unread", value: contactStats.unread, color: "bg-orange-50 text-orange-600" },
                { label: "Read", value: contactStats.read, color: "bg-green-50 text-green-600" },
              ].map((s) => (
                <div key={s.label} className={`rounded-xl p-5 ${s.color}`}>
                  <p className="text-sm font-manrope font-medium opacity-75">{s.label}</p>
                  <p className="text-3xl font-bold mt-1">{s.value}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveItem("contacts")}
              className="mt-3 flex items-center gap-2 text-sm font-manrope text-[#1E1E1E] font-medium hover:underline"
            >
              View all messages <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}