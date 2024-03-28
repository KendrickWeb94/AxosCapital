
"use client";

import React from 'react';
import NotificationList from '../Data/Notifications';

const ActiveNotifications = () => {
  return (
    <div className="container px-4 mx-auto py-4">
      <h1 className="text-xl text-white font-bold inter mb-4">Notifications</h1>
      <NotificationList />
    </div>
  );
};

export default ActiveNotifications;
