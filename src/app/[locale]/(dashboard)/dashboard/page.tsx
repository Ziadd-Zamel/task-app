import React from "react";
import DashboardStats from "./_components/dashboard-stats";
import TaskInviteCard from "./_components/taskInvite-card";
import TasksProgress from "./_components/tasks-progress";
import VisitorStatistics from "./_components/visitor-statistics";

export default function Page() {
  return (
    <section className="box-container py-6 sm:py-10 lg:py-20 space-y-4 sm:space-y-6 lg:space-y-8">
      {/* Dashboard Stats */}
      <DashboardStats />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
          <VisitorStatistics />
          <TaskInviteCard />
        </div>

        {/* Right Column  */}
        <div className="lg:col-span-1">
          <TasksProgress />
        </div>
      </div>
    </section>
  );
}
