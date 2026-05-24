"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard, FileText, LogOut,
  X, PanelLeftOpen, PanelLeftClose, MessageSquare,
} from "lucide-react";
import QuotesManager from "./QuotesManager/QuotesManager";
import Overview from "./Overview/Overview";
import ContactsManager from "./ContactsManager/ContactsManager";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to sign out?")) return;
    setLoggingOut(true);
    localStorage.clear();
    router.replace("/login");
  };

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "quotes", label: "Quote Requests", icon: FileText },
    { id: "contacts", label: "Contact Messages", icon: MessageSquare },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case "quotes": return <QuotesManager />;
      case "contacts": return <ContactsManager />;
      default: return <Overview setActiveItem={setActiveItem} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`fixed md:static top-0 left-0 h-full w-64 bg-[#1E1E1E] flex flex-col z-50 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>

        <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-700">
          <div className="flex items-center gap-3">
            <img src="/Images/logo.webp" alt="HB Logo" className="h-9 w-9 object-contain" />
            <span className="font-manrope font-semibold text-sm text-white">HB Transportation</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 rounded hover:bg-neutral-700">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    setActiveItem(id);
                    if (window.innerWidth < 768) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-manrope transition-colors ${
                    activeItem === id
                      ? "bg-white text-[#1E1E1E] font-medium"
                      : "text-gray-400 hover:bg-neutral-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-3 border-t border-neutral-700">
          {user && (
            <div className="px-3 py-2 mb-2">
              <p className="text-white text-sm font-manrope font-medium truncate">{user.name}</p>
              <p className="text-gray-500 text-xs font-manrope truncate">{user.email}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-manrope text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {loggingOut ? "Signing out..." : "Sign Out"}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen((p) => !p)}
            className="p-2 rounded hover:bg-gray-100"
          >
            {sidebarOpen
              ? <PanelLeftClose className="w-5 h-5 text-gray-600" />
              : <PanelLeftOpen className="w-5 h-5 text-gray-600" />
            }
          </button>
          <span className="font-manrope font-medium text-gray-800">
            {menuItems.find((m) => m.id === activeItem)?.label || "Dashboard"}
          </span>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}