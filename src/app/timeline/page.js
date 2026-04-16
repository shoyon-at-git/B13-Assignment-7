"use client";

import { useContext, useState } from "react";
import { FriendContext } from "@/context/FriendContext";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoDeviceCameraVideo } from "react-icons/go";
import { toast } from "react-toastify";

const TimelinePage = () => {
  const { timelineEvents } = useContext(FriendContext);
  const [filterType, setFilterType] = useState("all");

  const filteredEvents =
    filterType === "all"
      ? timelineEvents
      : timelineEvents.filter((item) => item.type === filterType);

  const getIcon = (type) => {
    if (type === "call") return "📞";
    if (type === "text") return <LuMessageSquareMore></LuMessageSquareMore>;
    if (type === "video") return "📽️";
  };

  const getTitle = (type, friendName) => {
    if (type === "call") return `Call with ${friendName}`;
    if (type === "text") return `Text with ${friendName}`;
    if (type === "video") return `Video with ${friendName}`;
    return `Interaction with ${friendName}`;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-11/12 max-w-4xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6">Timeline</h1>

      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="select select-bordered mb-6 w-full max-w-xs"
      >
        <option value="all">Filter timeline</option>
        <option value="call">Call</option>
        <option value="text">Text</option>
        <option value="video">Video</option>
      </select>

      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              {getIcon(event.type)}
            </div>

            <div>
              <h2 className="font-semibold">
                {getTitle(event.type, event.friendName)}
              </h2>
              <p className="text-sm text-gray-500">
                {formatDate(event.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;