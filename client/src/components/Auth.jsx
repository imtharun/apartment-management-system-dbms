import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Auth(props) {
  const nav = useNavigate();
  const inputEl = useRef(null);
  const passEl = useRef(null);
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (
      userId.toUpperCase().charAt(0) === "A" ||
      userId.toUpperCase().charAt(0) === "O" ||
      userId.toUpperCase().charAt(0) === "E" ||
      userId.toUpperCase().charAt(0) === "T" ||
      userId === ""
    ) {
      setIsName(true);
      return;
    } else {
      setIsName(false);
    }
  }, [userId]);

  useEffect(() => {
    if (password.length === 0) {
      setIsPassword(true);
      return;
    } else if (password.length < 6) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  }, [password]);

  const submitHandler = function (e) {
    e.preventDefault();

    setuserId(inputEl.current.value);
    setPassword(passEl.current.value);

    axios
      .post("http://localhost:5000/auth", {
        username: userId,
        password: password,
      })
      .then((res) => {
        if (res.data.user === "employee") {
          props.setIsAuth(true);
          nav("/employee");
          // window.addEventListener("popstate", function () {
          //   this.history.forward();
          // });
        }
        if (res.data.user === "admin") {
          props.setIsAuth(true);
          nav("/admin");
          // window.addEventListener("popstate", function () {
          //   this.history.forward();
          // });
        }
        if (res.data.user === "tenant") {
          props.setIsAuth(true);
          nav("/tenant");
          // window.addEventListener("popstate", function () {
          //   this.history.forward();
          // });
        }
        if (res.data.user === "owner") {
          props.setIsAuth(true);
          nav("/owner");
          // window.addEventListener("popstate", function () {
          //   this.history.forward();
          // });
        }
        if (res.data.user === "unknown") {
          setIsName(false);
          setIsPassword(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="font-mons flex items-center min-h-screen bg-white">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 ">
                Jasmine Towers
              </h1>
            </div>
            <div className="m-7">
              <form onSubmit={submitHandler}>
                <div className="relative mb-3">
                  <label
                    htmlFor="user-id"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    User Id
                  </label>
                  <input
                    ref={inputEl}
                    type="text"
                    autoFocus
                    name="user-id"
                    required
                    value={userId}
                    onChange={() => setuserId(inputEl.current.value)}
                    id="used-id"
                    placeholder="User id"
                    className={`w-full px-3 py-2 placeholder-gray-300 border ${
                      isName ? "border-gray-300" : "border-red-500"
                    } 
                      rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 `}
                  />
                  {!isName && (
                    <span className="h-2 absolute right-2 top-[0rem] font-semibold text-xs mt-2 block text-red-500">
                      Invalid username
                    </span>
                  )}
                </div>
                <div className="relative mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 "
                    >
                      Password
                    </label>
                  </div>
                  <input
                    ref={passEl}
                    type="password"
                    required
                    name="password"
                    id="password"
                    value={password}
                    autoComplete="on"
                    onChange={() => setPassword(passEl.current.value)}
                    placeholder="Your Password"
                    className={`w-full px-3 py-2 placeholder-gray-300 border 
                    ${
                      isPassword ? "border-gray-300" : "border-red-500"
                    } rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 `}
                  />
                  {!isPassword && (
                    <span className="absolute right-2 top-[0rem] font-semibold text-xs mt-2 block text-red-500">
                      Invalid password
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-3 font-semibold text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-white hover:text-blue-500 transition-all duration-300 hover:border-blue-500 border-transparent border-2"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
