import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Chat = () => {
  return (
    <>
      <Nav />
      <div id="chat" className="mx-auto">
        <iframe
          className="border-2"
          width="1520px"
          height="800px"
          src=" https://chatbot-gem.onrender.com/"
          title="Chat Bot"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Chat;
