// src/components/admin/SubmissionsChartCard.jsx
import React from "react";

export default function SubmissionsChartCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E6E9DD] p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-sm font-semibold text-[#314130]">
            Total Submissions by Month
          </h2>
          <p className="text-[11px] text-[#8B9480]">Last 6 Months</p>
        </div>
        <span className="text-[11px] text-[#8B9480]">2025</span>
      </div>

      {/* Fake chart area */}
      <div className="mt-2 flex-1">
        <div className="h-40 rounded-xl border border-dashed border-[#D3D8C8] bg-gradient-to-t from-[#EEF2E9] to-white relative overflow-hidden">
          {/* very simple line with dots, purely decorative */}
          <svg
            viewBox="0 0 100 40"
            className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)]"
          >
            <polyline
              fill="rgba(141,165,132,0.25)"
              stroke="none"
              points="0,30 10,26 25,24 40,18 55,16 70,18 85,22 100,24 100,40 0,40"
            />
            <polyline
              fill="none"
              stroke="#647559"
              strokeWidth="1.5"
              points="0,30 10,26 25,24 40,18 55,16 70,18 85,22 100,24"
            />
            {[0, 10, 25, 40, 55, 70, 85, 100].map((x, i) => {
              const yVals = [30, 26, 24, 18, 16, 18, 22, 24];
              return (
                <circle key={i} cx={x} cy={yVals[i]} r="1.4" fill="#647559" />
              );
            })}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="mt-2 flex justify-between text-[11px] text-[#8B9480]">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
}
