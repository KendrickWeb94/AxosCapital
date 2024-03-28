"use client";

import { useEffect, useState } from "react";

const ActiveStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  return (
    <div className={isOnline ? "bg-green-500 p-1 rounded-3xl text-white" : "bg-gray-500 p-1 rounded-3xl text-white"}>
      <div className="">{isOnline ? <p>Online</p> : <p>Offline</p>}</div>
    </div>
  );
};

export default ActiveStatus;
