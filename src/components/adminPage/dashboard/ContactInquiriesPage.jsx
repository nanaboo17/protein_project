import React, { useState, useEffect, useMemo } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import { ChevronDown, Share, Undo, Search } from "lucide-react";
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

  const [page, setPage] = useState(0); // zero-based
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsMenuOpen, setRowsMenuOpen] = useState(false);
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

  useEffect(() => {
    setPage(0);
  }, [searchTerm, startDate, endDate]);

  const paginatedInquiries = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredInquiries.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredInquiries, page, rowsPerPage]);

  const total = filteredInquiries.length;
  const from = total === 0 ? 0 : page * rowsPerPage + 1;
  const to = Math.min(total, (page + 1) * rowsPerPage);
  const totalPages =
    rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(total / rowsPerPage));

  const canGoPrev = page > 0;
  const canGoNext = page < totalPages - 1;
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
    <div className="min-h-screen bg-[#F4F5EC] flex ">
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

        <FilterBar />
        {/* Table card */}
        <section className="mt-5 bg-white rounded-xl shadow-sm border border-[#D6DCC8] overflow-visible">
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
              {paginatedInquiries.map((inq, idx) => (
                <tr
                  key={inq.name + idx}
                  className="border-t border-[#E4E7D8] hover:bg-[#FAFBF5]"
                >
                  <td className="py-2.5 px-4 text-center text-[#4F5947]">
                    {inq.date}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#0f3f04] font-semibold">
                    {inq.name}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#0f3f04] underline">
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
                        <Undo size={17} className="text-[#0f3f04]" />
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

          {/* ✅ Pagination footer (now dynamic) */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#E4E7D8] text-[11px] text-[#6D7566]">
            <div className="flex items-center gap-2">
              <span>Row per page</span>

              {/* Simple custom dropdown for rows per page */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setRowsMenuOpen((prev) => !prev)}
                  className="border border-[#D6DCC8] rounded-md px-2 py-1 flex items-center gap-1 bg-[#F4F5EC]"
                >
                  <span>{rowsPerPage}</span>
                  <span className="text-[10px]">▾</span>
                </button>

                {rowsMenuOpen && (
                  <div className="absolute z-10 mt-1 w-20 bg-white border border-[#D6DCC8] rounded-md shadow-md">
                    {[5, 10, 25, 50].map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`block w-full text-left px-3 py-1 hover:bg-[#F4F5EC] ${
                          rowsPerPage === size ? "font-semibold" : ""
                        }`}
                        onClick={() => {
                          setRowsPerPage(size);
                          setPage(0);
                          setRowsMenuOpen(false);
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="ml-3">
                {from}-{to} of <span className="font-semibold">{total}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => canGoPrev && setPage((p) => p - 1)}
                disabled={!canGoPrev}
                className={`rounded-full border border-[#D6DCC8] w-7 h-7 flex items-center justify-center text-xs ${
                  canGoPrev
                    ? "text-[#0f3f04]"
                    : "text-[#9AA28B] cursor-not-allowed opacity-50"
                }`}
              >
                ‹
              </button>

              <span className="px-2 py-1 rounded-md bg-[#F4F5EC] border border-[#D6DCC8]">
                {page + 1}
              </span>

              <button
                type="button"
                onClick={() => canGoNext && setPage((p) => p + 1)}
                disabled={!canGoNext}
                className={`rounded-full border border-[#D6DCC8] w-7 h-7 flex items-center justify-center text-xs ${
                  canGoNext
                    ? "text-[#0f3f04]"
                    : "text-[#9AA28B] cursor-not-allowed opacity-50"
                }`}
              >
                ›
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
