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
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    let formErrors = {};

    if (!validateEmail(emailValue)) {
      formErrors.email = "Email must be @criodo.com or @criodo.co.in";
    }

    if (!validatePassword(passwordValue)) {
      formErrors.password =
        "Password must contain at least one capital letter, one small letter, one special character, and one number";
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
                  {errors.email && (
                    <p className="text-red-500 text-[10px] font-bold">
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
                    <p className="text-red-500  text-[10px] font-bold">
                      {errors.password}
                    </p>
                  )}
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
      )}
    </>
  );
};

export default Login;
