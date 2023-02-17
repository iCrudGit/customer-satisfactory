import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  function onCHange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-semibold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-full rounded-2xl shadow-sm shadow-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full mb-4 px-4 py-2 text-gray-700 border-gray-900 rounded-1xl bg-yellow-100 text-xl transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onCHange}
              placeholder="Email Address"
            />

            <input
              className="w-full px-4 py-2 text-gray-700 border-gray-900 rounded-1xl bg-yellow-100 text-xl transition ease-in-out"
              type="password"
              id="password"
              value={password}
              onChange={onCHange}
              placeholder="Password"
            />
          </form>
          <button className="w-full bg-blue-500 mt-2 px-7 py-3 text-sm rounded font-semibold text-white shadow-md hover:bg-blue-700 transition duration-150 ease-in-out">
            LOGIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
