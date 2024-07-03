import React, { useRef, useState } from "react";
import "./Login.css";

const Login = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  setTimeout(() => {
    setDisplayForm(true);
  }, 3000);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username.current.value);
    console.log(email.current.value, password.current.value);
  };

  return (
    <div className="box absolute bg-black pt-10 w-1/12 my-32 mx-auto right-0 left-0 top-36 text-white bg-opacity-35 rounded">
      {displayForm && (
        <>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJLxhgeByiMgFkOUYRQGUtA9LO2dB_x3Hwg&s"
            alt="logo.jpg"
            className="rounded-full m-auto w-10 pb-3"
          />
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full">
              <input
                type="text"
                id="name"
                placeholder="Username"
                ref={username}
                className="px-4 py-2 m-2 w-full bg-slate-700 rounded-md"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                id="email"
                placeholder="Mail id"
                ref={email}
                className="px-4 py-2 m-2 w-full bg-slate-700 rounded-md"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                id="password"
                placeholder="Password"
                ref={password}
                className="px-4 py-2 m-2 w-full bg-slate-700 rounded-md"
              />
            </div>
            <div className="w-full">
              <button className="p-2 m-2 bg-red-700 w-full rounded-md">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
