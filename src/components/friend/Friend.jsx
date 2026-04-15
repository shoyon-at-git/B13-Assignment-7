import React from "react";
import Image from "next/image";
import Link from "next/link";

const Friend = ({ friend }) => {
  return (
    <Link href={`${friend.id}`} className=" rounded-lg p-4 flex flex-col items-center gap-2 shadow-2xl hover:shadow-md transition">
      
      <Image
        src={friend.picture}
        alt={friend.name}
        width={60}
        height={60}
        className="rounded-full object-cover"
      />
      <h3 className="font-semibold">{friend.name}</h3>

      <div className="text-right">
        <p className="text-xs text-gray-500 mb-3">
          {friend.days_since_contact} days ago
        </p>

        <span
          className={` text-xs px-2 py-1 rounded-full 
            ${friend.status === "overdue"
              ? " bg-red-500"
              : friend.status === "almost due"
              ? " bg-orange-300"
              : " bg-green-900"
          } text-white`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default Friend;