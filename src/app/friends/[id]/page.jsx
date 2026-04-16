"use client";

import { useParams } from "next/navigation";
import { useContext } from "react";
import { FriendContext } from "@/context/FriendContext";
import Image from "next/image";
import { GoArchive, GoDeviceCameraVideo } from "react-icons/go";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";

const FriendDetailsPage = () => {
    const { id } = useParams();
    const { friends } = useContext(FriendContext);

    const friend = friends.find((f) => f.id === Number(id));

    if (!friend) {
        return (
            <div className="flex justify-center items-center mt-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const formattedDate = new Date(friend.next_due_date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="w-11/12 max-w-4xl mx-auto mt-6 md:mt-8 lg:mt-10 flex flex-col gap-5">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-[35%] rounded-xl text-center shadow-md bg-white p-4 lg:p-0">
                    <Image
                        src={friend.picture}
                        alt={friend.name}
                        width={70}
                        height={70}
                        className="rounded-full mx-auto"
                    />

                    <h1 className="text-2xl font-bold mt-3">{friend.name}</h1>

                    <span
                        className={`text-xs px-2 py-1 rounded-full ${
                            friend.status === "overdue"
                                ? "bg-red-500"
                                : friend.status === "almost due"
                                  ? "bg-orange-300"
                                  : "bg-green-900"
                        } text-white`}
                    >
                        {friend.status}
                    </span>

                    <div className="mt-3 flex justify-center gap-2 flex-wrap">
                        {friend.tags.map((tag, i) => (
                            <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="mt-3 text-xs text-gray-500 px-2 lg:px-0">{friend.bio}</p>
                    <p className="text-gray-500 mt-1 text-xs break-all px-2 lg:px-0">{friend.email}</p>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                        <div className="rounded-xl border border-gray-200 bg-white px-4 py-6 shadow-md flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-semibold text-[#244d3f]">{friend.days_since_contact}</h1>
                            <p className="mt-1 text-sm text-[#64748b]">Days Since Contact</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white px-4 py-6 shadow-md flex flex-col items-center justify-center">
                            <h1 className="text-2xl font-semibold text-[#244d3f]">{friend.goal}</h1>
                            <p className="mt-1 text-sm text-[#64748b]">Goal (Days)</p>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white px-4 py-6 shadow-md flex flex-col items-center justify-center sm:col-span-2 lg:col-span-1">
                            <h1 className="text-2xl font-semibold text-[#244d3f] leading-tight">{formattedDate}</h1>
                            <p className="mt-1 text-sm text-[#64748b]">Next Due</p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3">
                            <h1 className="text-xl font-semibold text-[#244d3f]">Relationship Goal</h1>

                            <button className="rounded-md border border-gray-200 bg-[#f8fafc] px-3 py-1 text-sm text-[#1f2a38] hover:bg-gray-100 w-full sm:w-auto">
                                Edit
                            </button>
                        </div>

                        <p className="mt-3 text-base text-[#64748b]">
                            Connect every <span className="font-semibold text-[#1f2a38]">{friend.goal} days</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-3 w-full lg:w-[35%]">
                    <button className="btn border-gray-300 w-full">
                        <RiNotificationSnoozeLine />
                        Snooze 2 Weeks
                    </button>

                    <button className="btn border-gray-300 w-full">
                        <GoArchive />
                        Archive
                    </button>

                    <button className="btn text-red-600 border-gray-300 w-full">
                        <RiDeleteBinLine />
                        Delete
                    </button>
                </div>

                <div className="flex-1 p-4 rounded-xl shadow-md border border-gray-200 bg-white">
                    <h1 className="text-lg font-semibold text-gray-600 mb-3">Quick Check-In</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:justify-between">
                        <div className="bg-[#e9e9e9] rounded-lg py-4 px-6 lg:px-13 flex flex-col items-center justify-center gap-1 cursor-pointer shadow-sm">
                            <FiPhoneCall size={24} />
                            <p className="text-sm">Call</p>
                        </div>

                        <div className="bg-[#e9e9e9] rounded-lg py-4 px-6 lg:px-13 flex flex-col items-center justify-center gap-1 cursor-pointer shadow-sm">
                            <LuMessageSquareMore size={24} />
                            <p className="text-sm">Text</p>
                        </div>

                        <div className="bg-[#e9e9e9] rounded-lg py-4 px-6 lg:px-13 flex flex-col items-center justify-center gap-1 cursor-pointer shadow-sm">
                            <GoDeviceCameraVideo size={24} />
                            <p className="text-sm">Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;