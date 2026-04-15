"use client";
import { FriendContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import Friend from "../friend/Friend";

const FriendList = () => {
    const { friends } = useContext(FriendContext);
    return (
        <div className=" max-w-277.5 mx-auto pb-4">
            <h1 className="pt-10 mb-4 font-semibold text-2xl text-left">Your Friends</h1>
            <div className="grid grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <Friend key={friend.id} friend={friend}></Friend>
                ))}
            </div>
        </div>
    );
};

export default FriendList;
