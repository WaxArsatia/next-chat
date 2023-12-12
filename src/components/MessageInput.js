"use client";

import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { io } from "socket.io-client";

function MessageInput({ name }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const socket = io("http://localhost:3001");

  const sendMessage = () => {
    if (currentMessage === "" || currentMessage.trim() === "") return;

    socket.emit("message", { from: name, message: currentMessage.trim() });

    setCurrentMessage("");
  };

  return (
    <div className="flex w-full gap-4">
      <Input
        placeholder="Type your message here..."
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <div className="flex items-center justify-center">
        <Button
          color="primary"
          variant="shadow"
          radius="full"
          isIconOnly
          size="lg"
          onClick={sendMessage}
        >
          <BsSendFill size={25} />
        </Button>
      </div>
    </div>
  );
}

export default MessageInput;
