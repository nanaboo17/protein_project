// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import heroImg from "../../../assets/admin_page/admin-hero.png";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Full background image */}
      <img
        src={heroImg}
        alt="Admin hero"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
      />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen">
        {/* LEFT: text + form, shifted into the white area */}
        <div className="flex flex-col pl-[30%] pr-4 md:pr-8 py-8">
          {/* Back button */}
          <Link
            to="/"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#F5EFE5] mb-10"
          >
            <ChevronLeft className="text-[#53341A]" size={24} />
          </Link>

          {/* Heading + form */}
          <div className="flex items-center">
            <div className="max-w-md">
              <h1 className="text-[38px] md:text-[42px] font-semibold text-[#3C2C22] leading-snug">
                Hello there,
                <br />
                <span className="font-bold text-[#7C5422]">
                  welcome to Admin Page
                </span>
              </h1>

              {/* Form */}
              <form onSubmit={handleLogin} className="mt-10 space-y-6">
                {/* Username */}
                <div>
                  <label className="block text-sm font-semibold text-[#194A81] mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Input your full name"
                    className="w-[340px] md:w-[380px] lg:w-[420px] rounded-md border border-[#194A8150] px-4 py-3 text-sm outline-none focus:ring-2 placeholder:text-[#194A8170] focus:ring-[#F7B733] bg-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-[#194A81] mb-2">
                    Password
                  </label>

                  {/* wrapper must be relative for the eye icon */}
                  <div className="relative w-[340px] md:w-[380px] lg:w-[420px]">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="w-full rounded-md border border-[#194A8150] px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-[#F7B733] placeholder:text-[#194A8170] bg-white"
                    />

                    {/* Eye icon */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-[#7A9AC6]" />
                      ) : (
                        <Eye className="w-5 h-5 text-[#7A9AC6]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Log In button */}
                <button
                  type="submit"
                  className="mt-6 w-[340px] md:w-[380px] lg:w-[420px] py-3 rounded-md text-white font-bold text-sm shadow-md"
                  style={{
                    background:
                      "linear-gradient(90deg, #F5FF3C 0%, #FDA133 31%, #F5FF3C 92%)",
                  }}
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
