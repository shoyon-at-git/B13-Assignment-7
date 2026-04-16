"use client";

import { useContext, useMemo } from "react";
import { FriendContext } from "@/context/FriendContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const StatsPage = () => {
  const { timelineEvents } = useContext(FriendContext);

  const chartData = useMemo(() => {
    const counts = {
      text: 0,
      call: 0,
      video: 0,
    };

    timelineEvents.forEach((event) => {
      if (counts[event.type] !== undefined) {
        counts[event.type] += 1;
      }
    });

    return [
      { name: "Text", value: counts.text },
      { name: "Call", value: counts.call },
      { name: "Video", value: counts.video },
    ];
  }, [timelineEvents]);

  const COLORS = ["#7C3AED", "#1F5A4A", "#34A853"];

  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-8">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-[#1f2a38]">
          Friendship Analytics
        </h1>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#244d3f] mb-8">
          By Interaction Type
        </h2>

        {timelineEvents.length === 0 ? (
          <div className="h-[350px] flex items-center justify-center text-gray-500">
            No interaction data yet.
          </div>
        ) : (
          <div className="w-full h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={90}
                  outerRadius={110}
                  paddingAngle={1}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;