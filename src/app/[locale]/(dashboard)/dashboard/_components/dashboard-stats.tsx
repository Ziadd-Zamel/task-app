import React from "react";
import { Users, Briefcase, UserPlus } from "lucide-react";

export default function DashboardStats() {
  const stats = [
    {
      icon: Users,
      value: "1259",
      label: "Total Employees",
      bgColor: "bg-pink-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Briefcase,
      value: "23",
      label: "Job Openning",
      bgColor: "bg-yellow-50",
      iconColor: "text-blue-500",
    },
    {
      icon: UserPlus,
      value: "123",
      label: "New Applicant",
      bgColor: "bg-teal-100",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Stats Cards Container - Takes 2/3 width on large screens */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`${stat.bgColor} rounded-2xl p-6 flex flex-col`}
            >
              <Icon
                className={`${stat.iconColor} w-8 h-8 mb-4`}
                strokeWidth={1.5}
              />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Event Card - Takes 1/3 width on large screens */}
      <div className="relative rounded-2xl overflow-hidden bg-blue-500 min-h-40">
        {/* Curved yellow shape */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <svg
            viewBox="0 0 200 200"
            className="absolute top-0 right-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M 60 0 Q 40 100 60 200 L 200 200 L 200 0 Z"
              fill="#FDB954"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-white font-semibold text-lg">
              Upcoming <br /> Company Event
            </h3>
          </div>
          <p className="text-white text-sm mt-2">Watch a thriller</p>
        </div>
      </div>
    </div>
  );
}
