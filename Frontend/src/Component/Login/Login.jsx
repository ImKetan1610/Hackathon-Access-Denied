import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  setTimeout(() => {
    setDisplayForm(true);
  }, 3000);

  const validateUsername = (username) => {
    return username.length >= 5 && username.length <= 8;
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@criodo\.com$|^[a-zA-Z0-9._%+-]+@criodo\.co\.in$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = username.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    let formErrors = {};

    if (!validateUsername(user)) {
      formErrors.username = "* NAME MUST BE 5-8 CHAR LONG";
    }

    if (!validateEmail(emailValue)) {
      formErrors.email = "* PLEASE ADD CRIO'S ID";
    }

    if (!validatePassword(passwordValue)) {
      formErrors.password =
        "* PASSWORD CONTAINS: 1 CAPITAL, 1 SMALL, 1 SPECIAL, 1 NUMBER";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      console.log(username.current.value);
      console.log(emailValue, passwordValue);

      // Redirect after animation
      setTimeout(() => {
        navigate("/practice");
      }, 500); // 500ms matches the CSS transition duration
    }
  };

  return (
    <>
      <div className={`leftBox ${submitted ? "moveLeft" : ""}`}></div>
      <div className={`rightBox ${submitted ? "moveRight" : ""}`}></div>
      {!submitted && (
        // <div className="box absolute bg-[#00FFFF] pt-10 w-1/12 my-32 mx-auto right-0 left-0 top-36 bg-opacity-40 rounded">
        <div className="box absolute bg-[black] pt-10 w-1/12 my-32 mx-auto right-0 left-0 top-36 bg-opacity-40 rounded">
          {displayForm && (
            <>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJLxhgeByiMgFkOUYRQGUtA9LO2dB_x3Hwg&s"
                alt="logo.jpg"
                className="rounded-full m-auto w-10 pb-3 shadow-white"
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
                  {errors.username && (
                    <p className="text-[#ff0000] text-[12px] font-bold text-left px-5">
                      {errors.username}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    id="email"
                    placeholder="Mail id"
                    ref={email}
                    className="px-4 py-2 m-2 w-full bg-slate-700 rounded-md"
                  />
                  {errors.email && (
                    <p className="text-[#ff0000] text-[12px] font-bold text-left px-5">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    ref={password}
                    className="px-4 py-2 m-2 w-full bg-slate-700 rounded-md"
                  />
                  {errors.password && (
                    <p className="text-[red] text-[12px] font-bold">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <button className="p-2 m-2 bg-[#00008B] w-full rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
