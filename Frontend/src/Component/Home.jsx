import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import About from "./About/About";
import Practice from "./Practice/Practice";
import Chat from "./Chat/Chat";
import Contact from "./Contact/Contact";
import Onboarding from "./Onboarding/Onboarding";
import ChatTicket from "./Onboarding/ChatTicket";
import Mock from "./Onboarding/Mock";
import QnA from "./Onboarding/QnA";
import Faq from "./FAQ/Faq";

const Home = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/home",
      element: <Practice />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/onboarding",
      element: <Onboarding />,
    },
    {
      path: "/chatTicket",
      element: <ChatTicket />,
    },
    {
      path: "/mock",
      element: <Mock />,
    },
    {
      path: "/qna",
      element: <QnA />,
    },
    {
      path: "/faqs",
      element: <Faq />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Home;
