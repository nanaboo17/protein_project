import React from "react";

export default function EnrollmentDonutCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E6E9DD] p-4 flex flex-col">
      <h2 className="text-sm font-semibold text-[#314130]">
        Enrollment Breakdown
      </h2>
      <p className="text-[11px] text-[#8B9480]">By Program Type</p>

      <div className="flex-1 flex items-center justify-center mt-4 mb-2">
        {/* Donut */}
        <div className="relative w-40 h-40">
          <div
            className="w-full h-full rounded-full flex items-center justify-center"
            style={{
              backgroundImage:
                "conic-gradient(#21406A 0 60%, #F0F2ED 60% 100%)",
            }}
          >
            <div className="w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center">
              <span className="text-xl font-semibold text-[#314130]">132</span>
              <span className="text-[11px] text-[#8B9480]">Total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1 text-[11px] text-[#6D7566]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#21406A]" />
          <span>Preschool (60%)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#88A5D2]" />
          <span>Learning Course (40%)</span>
        </div>
      </div>
    </div>
  );
}
