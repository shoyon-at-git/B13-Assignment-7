"use client";
import React, { createContext, useEffect, useState } from "react";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timelineEvents, setTimelineEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setTimeout(() => {
    fetch("/data/friend.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, 2000);
}, []);

  useEffect(() => {
    const storedEvents = localStorage.getItem("timelineEvents");
    if (storedEvents) {
      setTimelineEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timelineEvents", JSON.stringify(timelineEvents));
  }, [timelineEvents]);

  const addTimelineEvent = ({ type, friendId, friendName }) => {
    const newEvent = {
      id: Date.now(),
      type,
      friendId,
      friendName,
      createdAt: new Date().toISOString(),
    };

    setTimelineEvents((prev) => [newEvent, ...prev]);
  };

  return (
    <FriendContext.Provider
      value={{
        friends,
        timelineEvents,
        addTimelineEvent,
        loading,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendProvider;