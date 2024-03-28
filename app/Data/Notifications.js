"use client";

import boss from "../assets/profile.jpg";
import a from "../assets/a.png";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const notifications = [
  {
    id: 1,
    title: "Welcome!",
    description:
      "Thanks for chosing to invest with us ,we would make sure you have the best of experience",
    timestamp: new Date("2024-03-21T2:30:00Z"),
    photo: a,
  },
  {
    id: 2,
    title: "Getting Started",
    description:
      "Hi am Benard Miller , if you have any questions please on how to Get started dont hesitate to contact us.",
    timestamp: new Date("2024-03-21T12:30:00Z"),
    photo: boss,
  },
  {
    id: 2,
    title: "Depositing",
    description:
      "Hi am Benard Miller , if you have any questions please on Depositing dont hesitate to contact us.",
    timestamp: new Date("2024-03-21T12:30:00Z"),
    photo: boss,
  },
  {
    id: 2,
    title: "Investing",
    description:
      "Hi am Benard Miller , if you have any questions on Investing please dont hesitate to contact us.",
    timestamp: new Date("2024-03-21T12:30:00Z"),
    photo: boss,
  },
];

const getTimeDifference = (timestamp) => {
  const currentTime = Date.now();
  const notificationTime = new Date(timestamp).getTime();
  const differenceInSeconds = Math.floor((currentTime - notificationTime) / 1000);

  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  } else {
    const minutes = Math.floor(differenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }
};

const NotificationList = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col inter gap-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="p-4 bg-white space-y-4 shadow-md rounded-md"
        >
          <div className=" flex  items-center gap-3 ">
            <div className=" overflow-hidden object-cover h-9 w-9 rounded-full">
              <Image src={notification.photo} className=" object-cover" />
            </div>
            <h3 className="text-sm inter text-gray-800 font-semibold">
              {notification.title}
            </h3>
          </div>
          <p className="text-[13px] inter  text-gray-600">
            {notification.description}
          </p>
          <span className="text-xs pt-3 text-gray-400">
            {getTimeDifference(notification.timestamp)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
