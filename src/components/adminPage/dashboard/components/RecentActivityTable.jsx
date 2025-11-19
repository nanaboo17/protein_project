import React from "react";

const rows = [
  {
    name: "Sophia Clark",
    type: "Contact Inquiry",
    timestamp: "15/11/2025 14:36:51",
  },
  {
    name: "Alessia Blanchard",
    type: "Course Registration",
    timestamp: "13/11/2025 10:24:12",
  },
  {
    name: "Daniela Randal",
    type: "Course Registration",
    timestamp: "12/11/2025 19:57:46",
  },
  {
    name: "Aliani Berger",
    type: "Contact Inquiry",
    timestamp: "09/11/2025 17:02:33",
  },
  {
    name: "Pablo McLaughlin",
    type: "Contact Inquiry",
    timestamp: "04/11/2025 20:13:44",
  },
  {
    name: "Pablo McLaughlin",
    type: "Contact Inquiry",
    timestamp: "04/11/2025 20:13:44",
  },
  {
    name: "Pablo McLaughlin",
    type: "Contact Inquiry",
    timestamp: "04/11/2025 20:13:44",
  },
];

export default function RecentActivityTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#E6E9DD]  mt-2">
      {/* Header row */}
      <div className="bg-[#4B6746] text-white text-xs font-semibold grid grid-cols-3 px-5 py-3">
        <div className="text-center">NAME</div>
        <div className="text-center">TYPE</div>
        <div className="text-center">TIMESTAMP</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-[#E6E9DD] overflow-hidden text-sm">
        {rows.map((row) => (
          <div
            key={row.name + row.timestamp}
            className="grid grid-cols-3 px-5 py-3 text-[#384638]"
          >
            <button className="text-[#2859A3] text-sm font-medium text-center ">
              {row.name}
            </button>
            <div className="text-xs text-center text-[#6D7566]  items-center">
              {row.type}
            </div>
            <div className="text-xs text-center text-[#6D7566]">
              {row.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
