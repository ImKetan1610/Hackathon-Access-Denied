import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Practice from "./Practice";

const Home = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/practice",
      element: <Practice />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Home;
