"use client";
import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import Friend from "../friend/Friend";

const FriendList = () => {
  const { friends, loading } = useContext(FriendContext);

  if (loading) {
    return (
      <div className="max-w-277.5 mx-auto pb-4">
        <h1 className="pt-10 mb-4 font-semibold text-2xl text-left">
          Your Friends
        </h1>

        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-277.5 mx-auto pb-4">
      <h1 className="pt-10 mb-4 font-semibold text-2xl text-left">
        Your Friends
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;