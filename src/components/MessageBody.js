"use client";

import { useState, useEffect } from "react";
import io from "socket.io-client";

function MessageBody() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:3001");

    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col">
      {messages.map((message, index) => (
        <div key={index} className="flex flex-col">
          <span>
            From: <span className="font-semibold">{message.from}</span>
          </span>
          <span>{message.message}</span>
        </div>
      ))}
    </div>
  );
}

export default MessageBody;
