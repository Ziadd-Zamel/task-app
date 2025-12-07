"use client";
import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Dec", lastSixMonths: 25, previous: 20 },
  { month: "Jan", lastSixMonths: 50, previous: 30 },
  { month: "Feb", lastSixMonths: 30, previous: 15 },
  { month: "Mar", lastSixMonths: 35, previous: 25 },
  { month: "Apr", lastSixMonths: 65, previous: 22 },
  { month: "May", lastSixMonths: 35, previous: 40 },
  { month: "Jun", lastSixMonths: 30, previous: 75 },
];

const chartConfig = {
  lastSixMonths: {
    label: "Last 6 Months",
    color: "hsl(217, 91%, 60%)",
  },
  previous: {
    label: "Previous",
    color: "hsl(142, 76%, 60%)",
  },
} satisfies ChartConfig;

export default function VisitorStatistics() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2 sm:pb-4">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0">
          {/* Title Section */}
          <div>
            <CardTitle className="text-base sm:text-lg md:text-xl font-poppins font-semibold text-gray-900">
              Visitor statistics
            </CardTitle>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 font-poppins">
              Nov - July
            </p>
          </div>

          {/* Legend/Stats Section */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto justify-start sm:justify-end">
            <div className="flex flex-col items-start sm:items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(217,91%,60%)]"></div>
                <p className="text-[10px] sm:text-xs font-poppins text-gray-400 uppercase whitespace-nowrap">
                  Last 6 Months
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-poppins font-semibold text-[#171717]">
                475 273
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[hsl(142,76%,60%)]"></div>
                <p className="text-[10px] sm:text-xs font-poppins text-gray-400 uppercase whitespace-nowrap">
                  Previous
                </p>
              </div>
              <p className="text-xs sm:text-sm md:text-base font-poppins font-semibold text-[#171717]">
                782 396
              </p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:px-4 md:px-6">
        <ChartContainer
          config={chartConfig}
          className="h-[200px] sm:h-[250px] md:h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 5,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="0"
                stroke="#f0f0f0"
                vertical={true}
                horizontal={true}
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                className="text-[10px] sm:text-xs"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 10 }}
                ticks={[0, 25, 50, 100]}
                className="text-[10px] sm:text-xs"
                width={30}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="lastSixMonths"
                type="natural"
                stroke="hsl(217, 91%, 60%)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="previous"
                type="natural"
                stroke="hsl(142, 76%, 60%)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
