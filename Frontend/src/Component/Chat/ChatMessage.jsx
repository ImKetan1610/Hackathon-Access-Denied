import React from "react";
import { FaUserTie } from "react-icons/fa";
import { SiChatbot } from "react-icons/si";

const ChatMessage = ({ data }) => {
  return (
    <div className={`flex ${data.user ? "justify-end" : "justify-start"} message`}>
      {data.user ? (
        <div className="message-left flex items-center">
          <span className="message-text">{data.message}</span>
          <FaUserTie className="message-icon" />
        </div>
      ) : (
        <div className="message-right flex items-center">
          <SiChatbot className="message-icon" />
          <span className="message-text">{data.message}</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
