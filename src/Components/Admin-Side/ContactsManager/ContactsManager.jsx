"use client";

import { useState, useEffect } from "react";
import { Trash2, X } from "lucide-react";
import api from "@/lib/axios";

export default function ContactsManager() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/contacts")
      .then(({ data }) => setContacts(data))
      .catch(() => setError("Failed to load messages."))
      .finally(() => setLoading(false));
  }, []);

  const handleView = async (contact) => {
    setSelected(contact);
    if (contact.status === "unread") {
      try {
        await api.patch(`/contacts/${contact.id}/read`);
        setContacts((prev) =>
          prev.map((c) => c.id === contact.id ? { ...c, status: "read" } : c)
        );
        setSelected((prev) => ({ ...prev, status: "read" }));
      } catch {}
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await api.delete(`/contacts/${id}`);
      setContacts((prev) => prev.filter((c) => c.id !== id));
      if (selected?.id === id) setSelected(null);
    } catch {
      alert("Failed to delete.");
    }
  };

  if (loading) return <div className="text-sm text-gray-400 font-manrope">Loading messages...</div>;
  if (error) return <div className="text-sm text-red-400 font-manrope">{error}</div>;

  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 min-w-0">
        <h3 className="font-manrope font-semibold text-gray-800 mb-4">
          Contact Messages ({contacts.length})
        </h3>

        {contacts.length === 0 ? (
          <div className="text-sm text-gray-400 font-manrope">No messages yet.</div>
        ) : (
          <div className="space-y-2">
            {contacts.map((c) => (
              <div
                key={c.id}
                onClick={() => handleView(c)}
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  selected?.id === c.id
                    ? "border-[#1E1E1E] bg-white shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {c.status === "unread" && (
                    <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  )}
                  <div className="min-w-0">
                    <p className={`text-sm font-manrope truncate ${
                      c.status === "unread" ? "font-semibold text-gray-900" : "text-gray-700"
                    }`}>
                      {c.fullName}
                    </p>
                    <p className="text-xs text-gray-400 font-manrope truncate">
                      {c.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-manrope ${
                    c.status === "unread"
                      ? "bg-orange-50 text-orange-500"
                      : "bg-green-50 text-green-600"
                  }`}>
                    {c.status}
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(c.id); }}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="w-96 shrink-0 bg-white border border-gray-200 rounded-xl p-6 h-fit sticky top-0 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-manrope font-semibold text-gray-800">Message Detail</h4>
            <button onClick={() => setSelected(null)} className="p-1 rounded hover:bg-gray-100">
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {[
            { label: "Full Name", value: selected.fullName },
            { label: "Email", value: selected.email },
            { label: "Phone", value: selected.phone || "—" },
            { label: "Message", value: selected.message },
          ].map(({ label, value }) => (
            <div key={label} className="mb-3">
              <p className="text-xs font-manrope text-gray-400 uppercase tracking-wide">{label}</p>
              <p className="text-sm font-manrope text-gray-800 mt-0.5">{value}</p>
            </div>
          ))}

          <button
            onClick={() => handleDelete(selected.id)}
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-red-50 text-red-500 text-sm font-manrope hover:bg-red-100 transition"
          >
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      )}
    </div>
  );
}