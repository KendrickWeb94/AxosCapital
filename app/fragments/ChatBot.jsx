"use client";

import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showChat, setShowChat] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") {
      return; 
    }

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for reaching out we would get back to you as fast as we can.",
        sender: "bot",
      };
      setMessages([...messages, botResponse]);
    }, 1000);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <div className="fixed bottom-4 inter right-4">
      {!showChat && (
        <button
          className="bg-blue-500 text-white text-sm rounded-full p-3 shadow-3xl"
          onClick={() => setShowChat(true)}
        >
          <AiOutlineMessage size={24} />
        </button>
      )}
      {showChat && (
        <div className="flex flex-col text-sm h-80 w-60 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
          <div className="flex-1 overflow-y-auto px-4 py-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex mb-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 max-w-xs text-sm break-words rounded-lg shadow-md ${
                    message.sender === "user"
                      ? "bg-blue-300 text-white rounded-bl-none"
                      : "bg-white"
                  }`}
                >
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-300 flex flex-col gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="flex-1 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Type your message here..."
            />
            <button
              disabled={!inputValue.trim()} // Disable the button if input is empty or contains only whitespace
              className={`w-full bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 ${
                !inputValue.trim() ? "cursor-not-allowed opacity-50" : "" // Apply different styles if disabled
              }`}
              onClick={handleSendMessage}
            >
              Send
            </button>
            <button
              className="float-end bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              onClick={handleCloseChat}
            >
              <MdCancel />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
