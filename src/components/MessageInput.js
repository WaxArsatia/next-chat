"use client";

import { socket } from "@/utils/socket";
import { Button, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { BsSendFill } from "react-icons/bs";

function MessageInput({ name, image }) {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {
    if (currentMessage === "" || currentMessage.trim() === "") return;

    socket.emit("message", {
      senderName: name,
      senderImage: image,
      message: currentMessage.trim(),
    });

    setCurrentMessage("");
  };

  const onTextareaKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex w-full gap-4">
      <Textarea
        placeholder="Type your message here..."
        value={currentMessage}
        onValueChange={setCurrentMessage}
        onKeyDown={onTextareaKeyDown}
        minRows={1}
        size="lg"
        cacheMeasurements
      />
      <div className="flex items-center justify-center">
        <Button
          color="primary"
          radius="full"
          isIconOnly
          size="lg"
          onClick={() => sendMessage()}
        >
          <BsSendFill size={25} />
        </Button>
      </div>
    </div>
  );
}

export default MessageInput;
