import React from "react";
import {
  LayoutDashboard,
  MessageCircle,
  CalendarDays,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
  { label: "Contact Inquiries", icon: MessageCircle, path: "/admin/inquiries" },
  { label: "Enrollment Data", icon: CalendarDays, path: "/admin/enrollment" },
  { label: "Manage Content", icon: FileText, path: "/admin/content" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="w-64 min-h-screen bg-linear-to-b from-[#BFD89A] via-[#9DBA7E] to-[#6D8661] text-white flex flex-col justify-between">
      {/* TOP: profile + menu */}
      <div>
        {/* Profile card */}
        <div className="px-4 pt-6 pb-4">
          <div className="rounded-[5px] bg-[#779079] px-4 py-3 flex items-center gap-3 shadow-sm">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white/30 flex items-center justify-center">
              <span className="text-sm font-semibold">WA</span>
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">
                Ibu Winda Astutik
              </div>
              <div className="text-[11px] text-white/80 mt-0.5">Admin User</div>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <nav className="mt-2 px-4 space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              item.path === "/admin/inquiries"
                ? location.pathname.startsWith("/admin/inquiries")
                : location.pathname === item.path;

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 rounded-[5px] px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[#FFFFFF39] text-[#010200]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon
                  size={18}
                  className={active ? "text-[#010200]" : "text-white"}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* BOTTOM: logout */}
      <div className="px-4 pb-6">
        <button
          onClick={() => navigate("/")}
          className="w-full h-11 rounded-[7px] bg-[#FFFFFF59] text-[#1550A2] flex items-center justify-center gap-2 text-sm font-semibold shadow-sm hover:bg-[#d6e1c6]"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
