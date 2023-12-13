"use client";

import { socket } from "@/utils/socket";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import { useState, useEffect, useRef } from "react";

function MessageBody({ name, image }) {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    function onMessage(message) {
      message.date = new Date();
      setMessages((prevMessages) => [...prevMessages, message]);
    }

    socket.on("message", onMessage);

    return () => {
      socket.off("message", onMessage);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col gap-4">
      {messages.map(({ senderName, senderImage, message, date }, index) => {
        if (senderName === name && senderImage === image) {
          return (
            <div
              key={index}
              className="flex flex-row-reverse items-center gap-2"
            >
              <Avatar src={senderImage} name={senderName} size="small" />
              <Card className="max-w-md bg-primary">
                <CardBody className="flex flex-row flex-wrap justify-end gap-2">
                  <div className="w-full max-w-fit">
                    <span className="text-white whitespace-pre-wrap">
                      {message}
                    </span>
                  </div>
                  <div className="flex flex-row-reverse items-end">
                    <span className="text-xs text-slate-300">
                      {new Date(date).getHours().toString().padStart(2, "0")}:
                      {new Date(date).getMinutes().toString().padStart(2, "0")}
                    </span>
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        } else {
          return (
            <div key={index} className="flex items-center gap-2">
              <Avatar src={senderImage} name={senderName} size="small" />
              <div>
                <span className="font-semibold">{senderName}</span>
                <Card className="max-w-md bg-slate-600 w-fit">
                  <CardBody className="flex flex-row flex-wrap justify-between gap-2">
                    <div className="w-full max-w-fit">
                      <span className="text-white whitespace-pre-wrap">
                        {message}
                      </span>
                    </div>
                    <div className="flex flex-row-reverse items-end">
                      <span className="text-xs text-slate-300">
                        {new Date(date).getHours().toString().padStart(2, "0")}:
                        {new Date(date)
                          .getMinutes()
                          .toString()
                          .padStart(2, "0")}
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        }
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageBody;
