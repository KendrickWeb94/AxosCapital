"use client";

import React, { useState, useEffect } from 'react';
import { IoCopyOutline } from "react-icons/io5";

const RefferallCode = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const isHiddenInitially = localStorage.getItem('isHidden');
    if (isHiddenInitially === 'true') {
      setIsHidden(true);
    }
  }, []);

  const copyToClipboard = () => {
    const referralCode = "k7mnolluser123";
    navigator.clipboard.writeText(referralCode);
    alert("Copied to clipboard");
  };

  const hideComponent = () => {
    setIsHidden(true);
    localStorage.setItem('isHidden', 'true');
  };

  return (
    <div className={`fixed z-h h-screen w-full flex-center inset-0 bg-blue-200/30 ${isHidden ? 'hidden' : ''}`}>
      <div className="w-[300px] flex-center absolute top-0 left-0 bg-white shadow-2xl h-screen rounded-lg">
        <div className="space-y-5 inter p-5">
          <h1 className="inter text-sm font-medium text-gray-600">
            Refer Someone and get 10% Bonus On their Gains
          </h1>
          <div className="w-full flex-center h-[120px]">
            <input
              type="text"
              name=""
              id=""
              className='p-1 outline-none px-3 inter text-gray-500 bg-gray-300 rounded-l-lg'
              value={"k7mnolluser123"}
            />
            <button
              className='p-2 rounded-r-lg bg-blue-400 flex-center text-white'
              onClick={copyToClipboard}
            >
              <IoCopyOutline />
            </button>
          </div>
          <div className="flex inter text-sm text-gray-600 underline items-center justify-between">
            <button onClick={hideComponent}>Never, Show Again</button>
            <button onClick={hideComponent}>Later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefferallCode;
