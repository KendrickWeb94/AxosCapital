"use client";

import { useState, useEffect } from "react";

import React from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isVisible && (
        <div className="w-full h-[100vh] flex-col gap-7 top-0 z-xl  bg-gray-50 fixed inset-0 flex items-center justify-center  ">
          <div class="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
