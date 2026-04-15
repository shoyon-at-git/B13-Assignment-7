"use client";
import React, { createContext, useEffect, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data/friend.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <FriendContext.Provider value={{ friends }}>
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;