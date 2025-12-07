"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TasksProgress() {
  // Calculate the stroke dasharray for the progress ring
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const completedPercent = 60;
  const activePercent = 20;
  const endedPercent = 20;

  // Calculate dash offsets for each segment
  const completedDash = (completedPercent / 100) * circumference;
  const activeDash = (activePercent / 100) * circumference;
  const endedDash = (endedPercent / 100) * circumference;

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="border-b pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-base font-poppins font-semibold text-gray-900">
            Tasks
          </CardTitle>
          <div className="flex items-center">
            <span className="text-xs sm:text-sm text-gray-500 font-poppins">
              Show:
            </span>
            <Select defaultValue="this-month">
              <SelectTrigger className="w-[110px] sm:w-[130px] cursor-pointer h-8 text-xs sm:text-sm border-0 shadow-none text-blue-500 font-poppins">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-month">This month</SelectItem>
                <SelectItem value="last-month">Last month</SelectItem>
                <SelectItem value="this-year">This year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6">
        {/* Progress Ring */}
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mb-6 sm:mb-8 shrink-0">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 200 200"
          >
            {/* Background circle */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="12"
            />

            {/* Completed segment (green) */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#10b981"
              strokeWidth="12"
              strokeDasharray={`${completedDash} ${
                circumference - completedDash
              }`}
              strokeLinecap="butt"
            />

            {/* Active segment (yellow) */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="12"
              strokeDasharray={`${activeDash} ${circumference - activeDash}`}
              strokeDashoffset={-completedDash}
              strokeLinecap="butt"
            />

            {/* Ended segment (red/coral) */}
            <circle
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke="#f87171"
              strokeWidth="12"
              strokeDasharray={`${endedDash} ${circumference - endedDash}`}
              strokeDashoffset={-(completedDash + activeDash)}
              strokeLinecap="butt"
            />
          </svg>

          {/* Center percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-500 font-poppins">
              {completedPercent}%
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <span className="text-xs sm:text-sm text-gray-700 font-poppins">
              Active
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            <span className="text-xs sm:text-sm text-gray-700 font-poppins">
              Completed
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <span className="text-xs sm:text-sm text-gray-700 font-poppins">
              Ended
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
