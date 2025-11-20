import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bold, Italic, Underline, List, Paperclip, Mic } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import userImg from "../../../assets/admin_page/inquiries-header.png";

export default function ContactInquiryResponse() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const inquiry = state?.inquiry;
  const toEmail = inquiry?.email || "";
  const subjectLine = inquiry?.subject
    ? `Re: ${inquiry.subject}`
    : "Re: Inquiry about admission preschool program";
  const originalName = inquiry?.name || "Sophia Clark";

  const [to, setTo] = useState(toEmail);
  const [subject, setSubject] = useState(subjectLine);
  const [message, setMessage] = useState("");

  // toolbar state (for visual "active" state)
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isBulleted, setIsBulleted] = useState(false);
  // voice dictation
  const [isListening, setIsListening] = useState(false);
  const editorRef = useRef(null);
  const recognitionRef = useRef(null);
  const [dictationError, setDictationError] = useState("");

  // Setup speech recognition (if supported)
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("SpeechRecognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "id-ID"; // or "en-US"
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("Voice recognition started");
      setIsListening(true);
    };
    recognition.onend = () => {
      console.log("Voice recognition ended");
      setIsListening(false);
    };
    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
      setIsListening(false);

      if (event.error === "network") {
        setDictationError(
          "Voice dictation error: please use Chrome on HTTPS/localhost and check your internet connection."
        );
      } else if (event.error === "not-allowed") {
        setDictationError(
          "Microphone access was blocked. Please allow mic permissions in your browser."
        );
      } else {
        setDictationError("Voice dictation error: " + event.error);
      }
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((res) => res[0].transcript)
        .join(" ");

      console.log("Voice transcript:", transcript);

      if (editorRef.current) {
        const current = editorRef.current.innerHTML || "";
        const spacer = current ? " " : "";
        const newHtml = current + spacer + transcript;
        editorRef.current.innerHTML = newHtml;
        setMessage(newHtml);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      recognitionRef.current = null;
    };
  }, []);

  const handleToggleListening = () => {
    const recognition = recognitionRef.current;

    if (!recognition) {
      alert(
        "Voice dictation is not supported in this browser. Try Chrome on HTTPS / localhost."
      );
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      focusEditor();
      try {
        recognition.start();
      } catch (err) {
        console.error("Error starting recognition:", err);
      }
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    // TODO: replace with real send logic
    console.log({ to, subject, message, inquiry });
  };

  const handleCancel = () => {
    navigate("/admin/inquiries");
  };

  const focusEditor = () => {
    if (editorRef.current) editorRef.current.focus();
  };

  // apply formatting with execCommand
  const applyFormat = (command) => {
    focusEditor();
    document.execCommand(command, false, null);
    updateToolbarState();
  };

  const handleBulletList = () => {
    focusEditor();
    document.execCommand("insertUnorderedList", false, null);
    updateToolbarState();
  };
  // update toolbar active state based on current selection
  const updateToolbarState = () => {
    try {
      setIsBold(document.queryCommandState("bold"));
      setIsItalic(document.queryCommandState("italic"));
      setIsUnderline(document.queryCommandState("underline"));
      setIsBulleted(document.queryCommandState("insertUnorderedList"));
    } catch (e) {
      // queryCommandState can throw in some edge cases; ignore
    }
  };

  // keep toolbar synced when user selects text / types
  useEffect(() => {
    const handler = () => updateToolbarState();
    document.addEventListener("selectionchange", handler);
    return () => document.removeEventListener("selectionchange", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F5EC] flex">
      <Sidebar />

      <main className="flex-1 px-8 py-6">
        {/* Top header card – same as list page */}
        <Header
          title="Contact Inquiries"
          subtitle="Manage and monitor all user inquiries submitted through the contact form"
          image={userImg}
        />

        {/* Response card */}
        <section className="mt-6 bg-white rounded-2xl border border-[#CFDCED] shadow-sm overflow-hidden">
          {/* Card header */}
          <div className="px-6 py-4 border-b border-[#CFDCED]">
            <h2 className="text-[25px] font-bold text-[#0f3f04]">
              Contact Inquiries Response
            </h2>
            <p className="mt-1 text-[13px] text-[#21406A]">
              Respond to {originalName}
              {inquiry?.subject
                ? `’s inquiry about ${inquiry.subject.toLowerCase()}`
                : "’s inquiry"}
            </p>
          </div>

          <div className="px-6 py-5 space-y-6">
            {/* Original inquiry section */}
            <section className="rounded-xl border border-[#E5EBBF] bg-[#EEF4C9] px-5 py-4">
              <h3 className="text-[13px] font-semibold text-[#0f3f04] mb-2">
                Original Inquiry from {originalName}
              </h3>
              <div className="bg-white rounded-md border border-[#D6DCC8] px-4 py-3 text-[15px] text-[#194A81]">
                Selamat Pagi admin, izin bertanya terkait biaya pendaftaran yang
                harus dibayar untuk masuk preschool dikenakan berapa ya?
              </div>
            </section>

            {/* Form */}
            <form onSubmit={handleSend} className="space-y-4">
              {/* To */}
              <div className="space-y-1">
                <label
                  htmlFor="to"
                  className="block text-[13px] font-semibold text-[#0f3f04]"
                >
                  To
                </label>
                <input
                  id="to"
                  type="email"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full rounded-md border border-[#D6DCC8] bg-[#FDFEFE] px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-[#698862]/40"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block text-[13px] font-semibold text-[#0f3f04]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full rounded-md border border-[#D6DCC8] bg-[#FDFEFE] px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-[#698862]/40"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-[13px] font-semibold text-[#0f3f04]">
                  Message
                </label>

                {/* Toolbar */}
                <div className="flex items-center gap-2 border border-[#D6DCC8] border-b-0 rounded-t-md bg-[#F7F8F3] px-3 py-2 text-[#314130] text-xs">
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyFormat("bold")}
                    className={
                      "p-1 rounded flex items-center justify-center " +
                      (isBold ? "bg-white text-[#194A81]" : "hover:bg-white")
                    }
                    aria-label="Bold"
                  >
                    <Bold size={14} />
                  </button>

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyFormat("italic")}
                    className={
                      "p-1 rounded flex items-center justify-center " +
                      (isItalic ? "bg-white text-[#194A81]" : "hover:bg-white")
                    }
                    aria-label="Italic"
                  >
                    <Italic size={14} />
                  </button>

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => applyFormat("underline")}
                    className={
                      "p-1 rounded flex items-center justify-center " +
                      (isUnderline
                        ? "bg-white text-[#194A81]"
                        : "hover:bg-white")
                    }
                    aria-label="Underline"
                  >
                    <Underline size={14} />
                  </button>

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleBulletList}
                    className={
                      "p-1 rounded flex items-center justify-center " +
                      (isBulleted
                        ? "bg-white text-[#194A81]"
                        : "hover:bg-white")
                    }
                    aria-label="Bullet list"
                  >
                    <List size={14} />
                  </button>

                  {/* Voice dictation */}
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleToggleListening}
                    className={
                      "ml-2 p-1 rounded flex items-center justify-center " +
                      (isListening
                        ? "bg-[#194A81] text-white"
                        : "hover:bg-white")
                    }
                    aria-label="Voice dictation"
                  >
                    <Mic size={14} />
                  </button>
                </div>

                {/* Rich text editor */}
                <div
                  ref={editorRef}
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => setMessage(e.currentTarget.innerHTML)}
                  className="w-full rounded-b-md border border-[#D6DCC8] bg-white px-3 py-2 text-[13px] outline-none min-h-[180px] focus:ring-2 focus:ring-[#698862]/40 [&_ul]:list-disc [&_ul]:ml-5 [&_li]:mb-1"
                />
                {dictationError && (
                  <p className="mt-1 text-[11px] text-red-600">
                    {dictationError}
                  </p>
                )}
              </div>

              {/* Footer buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-[#E4E7D8] mt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-5 py-2 rounded-full border hover:cursor-pointer border-[#D6DCC8] bg-white text-[13px] text-[#314130] hover:bg-[#F4F5EC]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#698862] text-[13px] text-white font-semibold hover:cursor-pointer hover:bg-[#4e7446]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
