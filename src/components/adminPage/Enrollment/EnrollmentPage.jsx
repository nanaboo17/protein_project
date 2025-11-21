// src/pages/admin/EnrollmentData.jsx
import React, { useState, useMemo, useEffect } from "react";
import Sidebar from "../dashboard/components/Sidebar";
import PageHeader from "../dashboard/components/Header";
import FilterBar from "../dashboard/components/FilterBar";
import { MoreVertical, FileText } from "lucide-react";
import header from "../../../assets/admin_page/enrollment-header.png";

const enrollments = [
  {
    date: "2025-08-12",
    child: "Sophia Clark",
    gender: "Female",
    birthDate: "12-08-2015",
    religion: "Christian",
    address: "Jl. Cendrawasih No.1, RT.02/RW.05",
    school: "Anytown Elementary School",
    child: "Sophia Clark",
    parent: "Emily Clark",
    email: "Emily@gmail.com",
    whatsapp: "081299428949",
    program: "Mathematic",
    grade: "4",
    number: "081299428949",
    status: "Pending",
    documents: [{ name: "family_card.pdf" }, { name: "payment_proof.jpg" }],
  },
  {
    date: "2025-08-12",
    child: "Liam Carter",
    gender: "Male",
    birthDate: "12-07-2015",
    religion: "Christian",
    address: "Jl. Cendrawasih No.1, RT.02/RW.05",
    school: "Anytown Elementary School",
    child: "Sophia Clark",
    parent: "Emily Clark",
    email: "Emily@gmail.com",
    whatsapp: "081299428949",
    program: "Mathematic",
    grade: "4",
    number: "081299428949",
    status: "Pending",
    documents: [{ name: "family_card.pdf" }, { name: "payment_proof.jpg" }],
  },
  {
    date: "2025-08-12",
    child: "Olivia Bennet",
    gender: "Female",
    birthDate: "12-08-2015",
    religion: "Moslem",
    address: "Jl. Cendrawasih No.1, RT.02/RW.05",
    school: "Anytown Elementary School",
    child: "Olivia Bennet",
    parent: "Tina Bennet",
    email: "Olivia@gmail.com",
    whatsapp: "081299228384",
    program: "Mathematic",
    grade: "2",
    number: "081299228384",
    status: "Pending",
    documents: [{ name: "family_card.pdf" }, { name: "payment_proof.jpg" }],
  },
  ,
  {
    date: "2025-11-26",
    child: "Noah Davis",
    parent: "Michael Davis",
    program: "Preschool",
    grade: "TK",
    number: "081291382943",
    status: "Rejected",
  },
  {
    date: "2025-11-26",
    child: "Ava Foster",
    parent: "Jesica Foster",
    program: "Kindergarten A",
    grade: "TK",
    number: "081439059395",
    status: "Resolved",
  },
  {
    date: "2025-11-26",
    child: "Stephanie Taylor",
    parent: "Maria Taylor",
    program: "Bimbel UTBK–SNBT",
    grade: "12",
    number: "081299428949",
    status: "Resolved",
  },
  {
    date: "2025-11-26",
    child: "Danny Cannon",
    parent: "Paul Cannon",
    program: "English for Kids",
    grade: "3",
    number: "083139437353",
    status: "Pending",
  },
  {
    date: "2025-11-26",
    child: "Iyla Walton",
    parent: "Louis Walton",
    program: "Bimbel Kedinasan",
    grade: "Umum",
    number: "083298947228",
    status: "Resolved",
  },
  {
    date: "2025-11-26",
    child: "Aliana Zhang",
    parent: "Liam Zhang",
    program: "Reading Writing",
    grade: "TK",
    number: "081291382943",
    status: "Pending",
  },
  {
    date: "2025-11-26",
    child: "Sean Hammond",
    parent: "Anthony Hammond",
    program: "Computer Course",
    grade: "6",
    number: "081182942974",
    status: "Rejected",
  },
];

function getStatusClasses(status) {
  switch (status) {
    case "Resolved":
      return "border-green-500 text-green-600 bg-green-50";
    case "Pending":
      return "border-amber-400 text-amber-500 bg-amber-50";
    case "Rejected":
      return "border-red-500 text-red-500 bg-red-50";
    default:
      return "border-slate-300 text-slate-600 bg-slate-50";
  }
}

/* ---------- Modal component ---------- */
function EnrollmentDetailsModal({ open, onClose, enrollment }) {
  if (!open || !enrollment) return null;

  const {
    child,
    gender,
    birthDate,
    religion,
    address,
    school,
    grade,
    parent,
    email,
    whatsapp,
    program,
    documents = [],
  } = enrollment;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-[620px] max-w-[95vw]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#00000030] flex justify-between items-center">
          <h2 className="text-[25px] font-semibold text-[#194a81]">
            Enrollment Details
          </h2>
          <button
            onClick={onClose}
            className="text-[#194a81] hover:text-slate-600 text-[25px] font-bold leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 text-sm text-[#1E3E73] space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Child details */}
          <div>
            <p className="font-semibold mb-2">Child Details:</p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-10 text-[13px]">
              <div>
                <p className="text-[#194a81]">Child Name</p>
                <p className="font-semibold">{child}</p>
              </div>
              <div>
                <p className="text-[#194a81]">Gender</p>
                <p className="font-semibold">{gender}</p>
              </div>
              <div>
                <p className="text-[#194a81]">Child Birth Date</p>
                <p className="font-semibold">{birthDate}</p>
              </div>
              <div>
                <p className="text-[#194a81]">Religion</p>
                <p className="font-semibold">{religion}</p>
              </div>
              <div className="col-span-2">
                <p className="text-[#194a81]">Address</p>
                <p className="font-semibold">{address}</p>
              </div>
              <div>
                <p className="text-[#194a81]">School of Origin</p>
                <p className="font-semibold">{school}</p>
              </div>
              <div>
                <p className="text-[#194a81]">Grade</p>
                <p className="font-semibold">{grade}</p>
              </div>
            </div>
          </div>

          {/* Parent details */}
          <div className="pt-1">
            <p className="font-semibold mb-2">Parent Details:</p>
            <div className="grid grid-cols-2 gap-y-3 gap-x-10 text-[13px]">
              <div>
                <p className="text-slate-500">Parent Name</p>
                <p className="font-semibold">{parent}</p>
              </div>
              <div>
                <p className="text-slate-500">Email</p>
                <p className="font-semibold">{email}</p>
              </div>
              <div>
                <p className="text-slate-500">Whatsapp Number</p>
                <p className="font-semibold">{whatsapp}</p>
              </div>
              <div>
                <p className="text-slate-500">Program</p>
                <p className="font-semibold">{program}</p>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="pt-1">
            <p className="font-semibold mb-2">Documents</p>
            <div className="flex flex-wrap gap-3">
              {documents.map((doc) => (
                <button
                  key={doc.name}
                  className="flex items-center gap-2 px-3 py-2 border border-[#194a81] rounded-md text-[12px] text-[#0D4C92] "
                  type="button"
                >
                  <FileText size={14} className="text-[#4DB5E9]" />
                  <span>{doc.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer buttons */}
        <div className="px-6 py-4 border-t border-[#00000030] flex justify-end gap-3 ">
          <button
            type="button"
            className="px-6 py-2 rounded-[10px] border border-[#A3173A] text-[#A3173A] bg-[#FFF3F3] text-sm font-semibold hover:bg-red-50"
            onClick={() => console.log("Rejected", child)}
          >
            Rejected
          </button>
          <button
            type="button"
            className="px-6 py-2 rounded-[10px] border border-[#698862] text-[#698862] bg-[#F8FFF6] text-sm font-semibold hover:bg-emerald-50"
            onClick={() => console.log("Verified", child)}
          >
            Verified
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EnrollmentDataPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(""); // yyyy-mm-dd
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rowsMenuOpen, setRowsMenuOpen] = useState(false);

  const handleRefresh = () => {
    console.log("Refresh enrollment data");
  };

  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  // ---- FILTERING ----
  const filteredEnrollments = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    if (start) start.setHours(0, 0, 0, 0);
    if (end) end.setHours(23, 59, 59, 999);

    return enrollments.filter((row) => {
      // text search
      const matchesSearch =
        !q ||
        row.child.toLowerCase().includes(q) ||
        row.parent.toLowerCase().includes(q) ||
        row.program.toLowerCase().includes(q) ||
        row.grade.toLowerCase().includes(q) ||
        row.number.toLowerCase().includes(q) ||
        row.status.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      // date range
      const rowDate = new Date(row.date);
      rowDate.setHours(12, 0, 0, 0); // avoid TZ weirdness

      if (start && rowDate < start) return false;
      if (end && rowDate > end) return false;

      return true;
    });
  }, [searchTerm, startDate, endDate]);

  useEffect(() => {
    setPage(0);
  }, [searchTerm, startDate, endDate]);

  const paginatedEnrollments = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredEnrollments.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredEnrollments, page, rowsPerPage]);

  const total = filteredEnrollments.length;
  const from = total === 0 ? 0 : page * rowsPerPage + 1;
  const to = Math.min(total, (page + 1) * rowsPerPage);
  const totalPages =
    rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(total / rowsPerPage));
  const canGoPrev = page > 0;
  const canGoNext = page < totalPages - 1;

  const handleExportCsv = () => {
    const headers = [
      "Child Name",
      "Parent Name",
      "Program",
      "Grade",
      "Number",
      "Status",
      "Date",
    ];

    const escapeCell = (value) => {
      if (value == null) return "";
      const v = String(value);
      if (/[",\n]/.test(v)) {
        return `"${v.replace(/"/g, '""')}"`;
      }
      return v;
    };

    const rows = filteredEnrollments.map((row) => [
      row.child,
      row.parent,
      row.program,
      row.grade,
      row.number,
      row.status,
      row.date,
    ]);

    const csv =
      headers.map(escapeCell).join(",") +
      "\n" +
      rows.map((r) => r.map(escapeCell).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "enrollment-data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#F4F5EC] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 px-8 py-6">
        {/* Header – same pattern as ContactInquiries */}
        <PageHeader
          title="Enrollment Data"
          subtitle="Manage and review student enrollment records across all programs"
          image={header}
          onRefresh={handleRefresh}
        />

        {/* Reusable filter bar */}
        <FilterBar
          searchValue={searchTerm}
          onSearchChange={setSearchTerm}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onExportClick={handleExportCsv}
        />

        {/* Table */}
        <section className="mt-5 bg-white shadow-sm border border-[#194A81] overflow-visible">
          <table className="w-full text-[15px]">
            <thead className="bg-[#698862] text-white">
              <tr>
                <th className="py-3 px-4 text-center font-bold">CHILD NAME</th>
                <th className="py-3 px-4 text-center font-bold">PARENT NAME</th>
                <th className="py-3 px-4 text-center font-bold">PROGRAM</th>
                <th className="py-3 px-4 text-center font-bold">GRADE</th>
                <th className="py-3 px-4 text-center font-bold">NUMBER</th>
                <th className="py-3 px-4 text-center font-bold">STATUS</th>
                <th className="py-3 px-4 text-center font-bold">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {paginatedEnrollments.map((row, idx) => (
                <tr
                  key={row.child + idx}
                  className={
                    idx % 2 === 0
                      ? "bg-white border-t border-[#E4E7D8]"
                      : "bg-white border-t border-[#E4E7D8]"
                  }
                >
                  <td className="py-2.5 px-4 text-center text-[#194A81] font-semibold">
                    {row.child}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#194A81]">
                    {row.parent}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#194A81]">
                    {row.program}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#194A81]">
                    {row.grade}
                  </td>
                  <td className="py-2.5 px-4 text-center text-[#194A81]">
                    {row.number}
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${getStatusClasses(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <button
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-[#F4F5EC]"
                      type="button"
                      onClick={() => {
                        setSelectedEnrollment(row);
                        setDetailsOpen(true);
                      }}
                    >
                      <MoreVertical size={17} className="text-[#35507A]" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredEnrollments.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="py-6 text-center text-[12px] text-[#9AA28B]"
                  >
                    No enrollment records match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[#E4E7D8] text-[11px] text-[#6D7566]">
            <div className="flex items-center gap-2">
              <span>Row per page</span>

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

      <EnrollmentDetailsModal
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        enrollment={selectedEnrollment}
      />
    </div>
  );
}
