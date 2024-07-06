import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import About from "./About/About";
import Practice from "./Practice/Practice";
import Chat from "./Chat/Chat";
import Contact from "./Contact/Contact";

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
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Home;
