import React, { useState, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { ChevronDown, Share, Undo } from "lucide-react";
import { useNavigate } from "react-router-dom";
import userImg from "../../../assets/admin_page/inquiries-header.png";
import searchIcon from "../../../assets/admin_page/search-icon.png";

const inquiries = [
  {
    date: "26/11/2025",
    name: "Sophia Clark",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Admission Process",
    status: "New",
  },
  {
    date: "26/11/2025",
    name: "Giorgia Herays",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Tuition Fee",
    status: "New",
  },
  {
    date: "26/11/2025",
    name: "Sheryl Austin",
    email: "sheryl@gmail.com",
    whatsapp: "08121930182",
    subject: "Learning Schedule",
    status: "New",
  },
  {
    date: "10/11/2025",
    name: "Frans Coleston",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Facilities & Enviroment",
    status: "Resolved",
  },
  {
    date: "26/11/2025",
    name: "Rio Kurniawan",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Curriculum Details",
    status: "New",
  },
  {
    date: "30/10/2025",
    name: "Matthew Saint",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Admission Process",
    status: "Resolved",
  },
  {
    date: "26/11/2025",
    name: "Oliviar Carter",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Facilities & Enviroment",
    status: "New",
  },
  {
    date: "05/10/2025",
    name: "Jacob Polan",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Learning Schedule",
    status: "Resolved",
  },
  {
    date: "15/09/2025",
    name: "Mario Caesar",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Tuition Fee",
    status: "Resolved",
  },
  {
    date: "26/11/2025",
    name: "Puan Maharani",
    email: "sophia@gmail.com",
    whatsapp: "08121930182",
    subject: "Admission Process",
    status: "New",
  },
];

function StatusPill({ status }) {
  const isNew = status === "New";

  return (
    <span
      className={
        "px-3 py-[3px] text-[11px] text-center item-center rounded-full border font-medium " +
        "shadow-md shadow-black/10 " +
        (isNew
          ? "border-[#F59E0B] text-[#F59E0B] bg-white"
          : "border-[#28A745] text-[#28A745] bg-white")
      }
    >
      {status}
    </span>
  );
}

function parseDisplayDate(d) {
  const [day, month, year] = d.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);
  return date;
}

export default function ContactInquiries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const navigate = useNavigate();

  const handleReply = (inq) => {
    navigate("/admin/inquiries/response", {
      state: { inquiry: inq },
    });
  };

  const handleRefresh = () => {
    console.log("Refresh clicked");
  };

  const filteredInquiries = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    if (start) start.setHours(0, 0, 0, 0);
    if (end) end.setHours(23, 59, 59, 999);

    return inquiries.filter((inq) => {
      // search filter
      const matchesSearch =
        !q ||
        inq.name.toLowerCase().includes(q) ||
        inq.email.toLowerCase().includes(q) ||
        inq.whatsapp.toLowerCase().includes(q) ||
        inq.subject.toLowerCase().includes(q) ||
        inq.date.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // date range filter
      const inqDate = parseDisplayDate(inq.date);

      if (start && inqDate < start) return false;
      if (end && inqDate > end) return false;

      return true;
    });
  }, [searchTerm, startDate, endDate]);

  const handleExportCsv = () => {
    const headers = ["Date", "Name", "Email", "WhatsApp", "Subject", "Status"];

    const escapeCell = (value) => {
      if (value == null) return "";
      const v = String(value);
      if (/[",\n]/.test(v)) {
        return `"${v.replace(/"/g, '""')}"`;
      }
      return v;
    };

    const rows = filteredInquiries.map((inq) => [
      inq.date,
      inq.name,
      inq.email,
      inq.whatsapp,
      inq.subject,
      inq.status,
    ]);

    const csv =
      headers.map(escapeCell).join(",") +
      "\n" +
      rows.map((r) => r.map(escapeCell).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "contact-inquiries.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const dateLabel =
    startDate || endDate
      ? `${startDate || "…"} – ${endDate || "…"}`
      : "Date Range";

  return (
    <div className="min-h-screen bg-[#F4F5EC] flex">
      {/* Sidebar you already have */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 px-8 py-6">
        {/* Top header card – using existing Header component */}
        <Header
          title="Contact Inquiries"
          subtitle="Manage and monitor all user inquiries submitted through the contact form"
          image={userImg}
          onRefresh={handleRefresh}
        />

        {/* Filters bar */}
        <section className="mt-6 h-[106px] bg-[#C2D79C50] border border-[#1B6B2E50] rounded-[15px] px-5 py-10 flex items-center justify-between gap-4 relative">
          {/* Search */}
          <div className="flex-1">
            <div className="bg-white h-[43px] rounded-lg border border-[#21406A] px-4 py-2 flex items-center gap-2 text-[13px]">
              <img
                src={searchIcon}
                alt="Search"
                className="w-4 h-4 object-contain"
              />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none text-[13px] text-[#21406A] placeholder:text-[#21406A] bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center  gap-3">
            {/* Date range pill + dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDatePickerOpen((prev) => !prev)}
                className="px-5 py-2 rounded-lg   h-[43px] bg-white border border-[#21406A] text-[13px] text-[#21406A] flex items-center gap-2"
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
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-[#4F5947]">End date</span>
                      <input
                        type="date"
                        className="border border-[#D6DCC8] rounded px-2 py-1 text-[11px] outline-none"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </label>
                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        className="text-[#6D7566]"
                        onClick={() => {
                          setStartDate("");
                          setEndDate("");
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
              onClick={handleExportCsv}
              className="px-5 h-[43px] py-2 rounded-lg bg-white border border-[#21406A] text-[13px] text-[#21406A] flex items-center gap-2"
            >
              <Share size={14} className="text-[#194a81]" />
              <span className="font-semibold">Export Report</span>
            </button>
          </div>
        </section>

        {/* Table card */}
        <section className="mt-5 bg-white rounded-xl shadow-sm border border-[#D6DCC8] overflow-hidden">
          <table className="w-full text-[12px]">
            <thead className="bg-[#698862] text-white">
              <tr>
                <th className="py-3 px-4 text-center font-bold">DATE</th>
                <th className="py-3 px-4 text-center font-bold">NAME</th>
                <th className="py-3 px-4 text-center font-bold">EMAIL</th>
                <th className="py-3 px-4 text-center font-bold">WHATSAPP</th>
                <th className="py-3 px-4 text-center font-bold">SUBJECT</th>
                <th className="py-3 px-4 text-center font-bold">STATUS</th>
                <th className="py-3 px-4 text-center font-bold">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.map((inq, idx) => (
                <tr
                  key={inq.name + idx}
                  className="border-t border-[#E4E7D8] hover:bg-[#FAFBF5]"
                >
                  <td className="py-2.5 px-4 text-center text-[#4F5947]">
                    {inq.date}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#1E3860] font-semibold">
                    {inq.name}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#1E3860] underline">
                    {inq.email}
                  </td>
                  <td className="py-2.5 px-4 text-center">{inq.whatsapp}</td>
                  <td className="py-2.5 px-4 text-center">{inq.subject}</td>
                  <td className="py-2.5 px-4 text-center">
                    <StatusPill status={inq.status} />
                  </td>
                  <td className="py-2.5 px-4">
                    <div className="flex justify-center items-center">
                      <button
                        type="button"
                        onClick={() => handleReply(inq)}
                        className="rounded-full w-7 h-7 flex items-center justify-center hover:bg-[#F4F5EC]"
                      >
                        <Undo size={17} className="text-[#194a81]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredInquiries.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="py-6 text-center text-[12px] text-[#9AA28B]"
                  >
                    No inquiries match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination footer (static for now) */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#E4E7D8] text-[11px] text-[#6D7566]">
            <div className="flex items-center gap-2">
              <span>Row per page</span>
              <button className="border border-[#D6DCC8] rounded-md px-2 py-1 flex items-center gap-1 bg-[#F4F5EC]">
                <span>10</span>
                <span className="text-[10px]">▾</span>
              </button>
              <span className="ml-3">
                1-10 of <span className="font-semibold">100</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-full border border-[#D6DCC8] w-7 h-7 flex items-center justify-center text-xs text-[#9AA28B]">
                ‹
              </button>
              <span className="px-2 py-1 rounded-md bg-[#F4F5EC] border border-[#D6DCC8]">
                1
              </span>
              <button className="rounded-full border border-[#D6DCC8] w-7 h-7 flex items-center justify-center text-xs">
                ›
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
