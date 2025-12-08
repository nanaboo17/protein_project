import React, { useState } from "react";
import Sidebar from "../dashboard/components/Sidebar";
import PageHeader from "../dashboard/components/Header";
import { Eye, EyeOff, Settings } from "lucide-react";
import settingsIcon from "../../../assets/admin_page/settings-icon.png";

export default function AdminSettings() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Profile updated");
  };

  return (
    <div className="min-h-screen bg-[#F4F5EC] flex">
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 px-8 py-6">
        {/* Top header */}
        <PageHeader
          title="Settings"
          subtitle="Manage your administrator profile"
          image={settingsIcon}
          hideRefresh
        />

        {/* Profile panel */}
        <div className="bg-white rounded-xl my-4 p-6 shadow-md border border-[#E8E8D2] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-xl font-semibold text-[#00000070]">
                Ibu Winda Astutik
              </p>
              <p className="mt-3 text-sm text-[#00000070]">Admin User</p>
            </div>
          </div>
        </div>

        {/* Information form */}
        <form
          onSubmit={handleUpdate}
          className="bg-white rounded-xl p-6 shadow-md border border-[#E8E8D2] space-y-6"
        >
          <h2 className="text-lg font-semibold text-[#00000070] ">
            Admin User Information
          </h2>

          {/* Form fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-semibold text-[#00000070] mb-2">
                First Name
              </label>
              <input
                type="text"
                defaultValue="Winda"
                className="w-full border border-[#194A8150] px-4 py-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#F7B733]"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-semibold text-[#00000070] mb-2">
                Last Name
              </label>
              <input
                type="text"
                defaultValue="Astutik"
                className="w-full border border-[#194A8150] px-4 py-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#F7B733]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#00000070] mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="widaas@gmail.com"
                className="w-full border border-[#194A8150] px-4 py-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#F7B733]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-[#00000070] mb-2">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue="0812932974731"
                className="w-full border border-[#194A8150] px-4 py-3 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#F7B733]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-[#00000070] mb-2">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                defaultValue="Admin1382"
                className="w-full border border-[#194A8150] px-4 py-3 pr-10 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#F7B733]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[42px]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-[#00000070] mb-2">
                Confirm Password
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                defaultValue="Admin1382"
                className="w-full border border-[#194A8150] px-4 py-3 pr-10 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#F7B733]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-[42px]"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center mt-10">
            <button
              type="submit"
              className="bg-[#194A81] hover:bg-[#143865] text-white px-6 py-3 rounded-md font-semibold text-sm transition"
            >
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
