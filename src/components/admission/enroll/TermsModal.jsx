import React from "react";
import { X } from "lucide-react";

export default function TermsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="bg-white max-w-2xl w-full mx-4 rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-[#F7FAFF]">
          <h3 className="text-[#1E3E73] font-bold text-lg">
            Enrollment Terms &amp; Conditions
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-4 max-h-[70vh] overflow-y-auto text-sm text-[#444] space-y-4">
          <p className="text-xs text-gray-500">
            Last Updated:{" "}
            <span className="font-semibold">14 November 2025</span>
          </p>

          <p className="font-semibold">
            Please read these Enrollment Terms &amp; Conditions carefully!
          </p>

          <ol className="list-decimal ml-4 space-y-3">
            <li>
              <p className="font-semibold">Registration Requirements</p>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Form must be completed by the parent/guardian.</li>
                <li>
                  Attach a copy of the student’s birth certificate and family
                  card.
                </li>
                <li>
                  Returning students who ranked 1–3 are encouraged to attach a
                  legalized report card.
                </li>
                <li>
                  Write in capital letters and cross out any irrelevant
                  sections.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Payment</p>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>
                  Pay the registration fee and first installment according to
                  the selected program.
                </li>
                <li>
                  Payments are made via Bank BRI to{" "}
                  <span className="font-semibold">
                    BIMBINGAN BELAJAR KURSUS RUMAH SUKSES
                  </span>
                  , Account No.{" "}
                  <span className="font-semibold">7582-0101-1771-536</span>.
                </li>
                <li>
                  After payment, please send proof of payment to the
                  administration team.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Parent/Guardian Responsibility</p>
              <p className="mt-1">
                Parents/guardians are expected to support and be involved in the
                student’s learning program.
              </p>
            </li>

            <li>
              <p className="font-semibold">Attendance &amp; Punctuality</p>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>
                  Students must arrive at least 15 minutes before class begins.
                </li>
                <li>
                  Late students must report to the tutor before joining the
                  session.
                </li>
                <li>
                  Students must bring all required learning materials for each
                  session.
                </li>
                <li>
                  Absences must be reported via SMS or WhatsApp to{" "}
                  <span className="font-semibold">0813-2333-3530</span>.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Language &amp; Conduct</p>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>
                  Students must use proper Bahasa Indonesia and English within
                  the institution.
                </li>
                <li>
                  All conflicts must be resolved peacefully or reported to a
                  tutor.
                </li>
                <li>
                  Students must behave respectfully toward peers, tutors, and
                  guests.
                </li>
                <li>
                  Students are not allowed to disturb class, speak out of place,
                  or initiate disruptive behavior.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Cleanliness &amp; Property Care</p>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Do not litter; dispose of trash in designated areas.</li>
                <li>
                  Do not damage or write on school property including desks,
                  chairs, whiteboards, and facilities.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Prohibited Behavior</p>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Using inappropriate, rude, or insulting language.</li>
                <li>
                  Starting or participating in fights, bullying, or SARA-related
                  conflicts.
                </li>
                <li>
                  Smoking, drinking alcohol, using drugs, or engaging in
                  gambling.
                </li>
                <li>
                  Bringing matches, lighters, weapons, sharp objects, or
                  unrelated reading materials.
                </li>
              </ul>
            </li>

            <li>
              <p className="font-semibold">Administrative Policy</p>
              <p className="mt-1">
                All administrative payments are non-refundable for any reason,
                except if transferred to a sibling.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
