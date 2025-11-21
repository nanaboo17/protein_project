import React, { useState } from "react";
import { ChevronDown, Share, Search } from "lucide-react";

export default function FilterBar({
  searchValue,
  onSearchChange,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onExportClick,
}) {
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const dateLabel =
    startDate || endDate
      ? `${startDate || "…"} – ${endDate || "…"}`
      : "Date Range";

  return (
    <section className="mt-6 h-[106px] bg-[#C2D79C50] border border-[#1B6B2E50] rounded-[15px] px-5 py-10 flex items-center justify-between gap-4 relative">
      {/* Search */}
      <div className="flex-1">
        <div className="bg-white h-[43px] rounded-lg border border-[#21406A] px-4 py-2 flex items-center gap-2 text-[13px]">
          <Search className="w-4 h-4 text-[#0f3f04]" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-[13px] text-[#21406A] placeholder:text-[#21406A] bg-transparent"
            value={searchValue}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-3">
        {/* Date range pill + dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setDatePickerOpen((prev) => !prev)}
            className="px-5 py-2 rounded-lg h-[43px] bg-white border border-[#21406A] text-[13px] text-[#21406A] flex items-center gap-2"
          >
            <span>{dateLabel}</span>
            <ChevronDown size={14} className="text-[#194a81]" />
          </button>

          {datePickerOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-[#D6DCC8] rounded-lg shadow-md p-3 z-20 w-64 text-[11px]">
              <div className="flex flex-col gap-2">
                <label className="flex flex-col gap-1">
                  <span className="text-[#4F5947]">Start date</span>
                  <input
                    type="date"
                    className="border border-[#D6DCC8] rounded px-2 py-1 text-[11px] outline-none"
                    value={startDate}
                    onChange={(e) =>
                      onStartDateChange && onStartDateChange(e.target.value)
                    }
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-[#4F5947]">End date</span>
                  <input
                    type="date"
                    className="border border-[#D6DCC8] rounded px-2 py-1 text-[11px] outline-none"
                    value={endDate}
                    onChange={(e) =>
                      onEndDateChange && onEndDateChange(e.target.value)
                    }
                  />
                </label>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    className="text-[#6D7566]"
                    onClick={() => {
                      onStartDateChange && onStartDateChange("");
                      onEndDateChange && onEndDateChange("");
                    }}
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    className="text-[#21406A] font-semibold"
                    onClick={() => setDatePickerOpen(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Export CSV */}
        <button
          type="button"
          onClick={onExportClick}
          className="px-5 h-[43px] py-2 rounded-lg bg-white border border-[#21406A] text-[13px] flex items-center gap-2"
        >
          <Share size={14} className="text-[#0f3f04]" />
          <span className="font-semibold text-[#0f3f04]">Export Report</span>
        </button>
      </div>
    </section>
  );
}
