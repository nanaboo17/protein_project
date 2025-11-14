import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function CustomSelect({ placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div ref={ref} className="relative w-full text-sm">
      {/* Top box */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border border-[#D4D4D4] bg-[#F7F7F7] rounded-md px-3 py-2 flex items-center justify-between focus:outline-none"
      >
        <span className={value ? "text-[#333]" : "text-[#9B9B9B]"}>
          {selectedLabel}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#9B9B9B]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#9B9B9B]" />
        )}
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-[#D4D4D4] rounded-md shadow-sm z-20">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm ${
                  isSelected
                    ? "bg-[#DDE1E7] font-semibold text-[#333]"
                    : "bg-white text-[#555]"
                } hover:bg-[#EEF0F4]`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default CustomSelect;
