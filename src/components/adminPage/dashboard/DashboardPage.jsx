import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import SubmissionsChartCard from "./components/SubmissionsChartCard";
import EnrollmentDonutCard from "./components/EnrollmentDonutCard";
import RecentActivityTable from "./components/RecentActivityTable";
import userImg from "../../../assets/admin_page/user.png";
import inquiryIcon from "../../../assets/admin_page/inquiry.png";
import enrollIcon from "../../../assets/admin_page/enrollment.png";
import paymentIcon from "../../../assets/admin_page/payment.png";

export default function AdminDashboard() {
  const handleRefresh = () => {
    console.log("Refresh clicked");
  };
  return (
    <div className="min-h-screen flex bg-[#F5F5EC] overflow-hidden">
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col px-6 py-6 gap-6 overflow-hidden">
        <Header
          title="Admin Dashboard"
          subtitle="Manage and monitor all data"
          image={userImg}
          onRefresh={handleRefresh}
        />

        {/* Top stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            label="Total Inquiries Received"
            value="57"
            icon={inquiryIcon}
          />
          <StatCard
            label="New Enrollments Today"
            value="132"
            icon={enrollIcon}
          />
          <StatCard label="Pending Payments" value="41" icon={paymentIcon} />
        </div>

        {/* Middle row: chart + donut */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
          <SubmissionsChartCard />
          <EnrollmentDonutCard />
        </div>

        {/* Bottom table */}
        <RecentActivityTable />
      </div>
    </div>
  );
}
