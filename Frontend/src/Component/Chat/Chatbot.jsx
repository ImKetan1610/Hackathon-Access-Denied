import React, { useState } from "react";
import "./Chatbot.css";
import ChatMessage from "./ChatMessage";
import { analyze } from "../../utils";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      message: "May I have your name?",
    },
  ]);
  const [text, setText] = useState("");
  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      let reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        { message: `Hi, ${text}` },
        { message: `How can I help you?` },
      ];
    }
    setMessages(list);
    setText("");

    setTimeout(() => {
      document.querySelector("#companyName").scrollIntoView();
    }, 1000);
  };
  return (
    <div className="chatbot-container">
      <div className="header flex justify-center items-center border-2 gap-5 p-4 rounded-lg">
        <img
          className="rounded-full w-24 h-24 md:w-36 md:h-36"
          src="https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg"
          alt="chatbot logo"
        />
        <p className="font-bold text-xl md:text-2xl text-[#40E0D0]">
          Start Your First Chat
        </p>
      </div>
      <div className="chat-message-container text-center rounded-xl p-4 m-4 max-h-[450px] overflow-y-auto shadow-lg">
        {messages?.length > 0 &&
          messages?.map((data, idx) => <ChatMessage key={idx} data={data} />)}
        <div className="input-container flex gap-5 justify-center items-center mt-4">
          <input
            className="input-box px-3 py-2 rounded-full w-8/12"
            type="search"
            placeholder="Type Here...!!!"
            name="ask"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="button"
            onClick={onSend}
            className="send-button text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2"
          >
            Send
          </button>
        </div>
        <div id="companyName" className="text-sm text-gray-500 mt-4">
          Engineer Insight
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
