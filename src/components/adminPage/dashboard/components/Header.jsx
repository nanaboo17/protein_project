import React from "react";
import { RefreshCw } from "lucide-react";

export default function PageHeader({
  title = "Page Title",
  subtitle = "",
  image,
  onRefresh,
  children, // optional additional actions
}) {
  return (
    <header className="w-full h-[158px] rounded-xl bg-linear-to-r from-[#7DA166] to-[#5B7D57] text-white px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        {/* Optional image */}
        {image && (
          <div className="w-[65px] h-[65px] overflow-hidden">
            <img
              src={image}
              alt="Header Icon"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Text */}
        <div>
          <h1 className="text-[32px] font-semibold leading-tight">{title}</h1>
          {subtitle && <p className="text-[16px] text-white/80">{subtitle}</p>}
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-3">
        {/* Refresh button only if function is provided */}
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="flex items-center gap-2 rounded-[7px] bg-white/90 text-[#355539] px-4 py-2 text-sm font-semibold shadow"
          >
            <RefreshCw size={16} className="text-[#355539]" />
            Refresh
          </button>
        )}

        {/* Extra actions */}
        {children}
      </div>
    </header>
  );
}
