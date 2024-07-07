import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Chatbot from "./Chatbot";
// import "bootstrap/dist/css/bootstrap.min.css";

const Chat = () => {
  return (
    <>
      <Nav />
      <div
        id="chat"
        className="min-h-screen w-6/12  mx-auto flex flex-col p-1"
      >
        <Chatbot />
      </div>

      <Footer />
    </>
  );
};

export default Chat;
