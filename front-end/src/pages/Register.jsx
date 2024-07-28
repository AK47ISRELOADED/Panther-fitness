import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register py-12 px-4">
      <div className="w-full mx-auto ">
        <form className=" ease-in duration-300 md:w-[60%] backdrop-blur-md bg-[#191E24] mx-auto flex flex-col items-center rounded-md px-20 py-5  ">
          <h1 className="text-3xl capitalize font-semibold mb-4">
            create new account
          </h1>
          <div className="my-4 w-full ">
            <label
              className="block text-gray-400 font-semibold text-sm mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="abcd efgh"
              name="name"
              className=" shadow-sm appearance-none border rounded w-full py-2 px-3 bg-[#1b2127]  text-gray-300 focus:outline-none outline-none"
            />
          </div>
          <div className="my-4 mb-8 w-full">
            <label
              className="block text-gray-400 font-semibold text-sm mb-2"
              htmlFor="email"
            >
              your email
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              name="email"
              className=" shadow-sm appearance-none border rounded w-full py-2 px-3 bg-[#1b2127]  text-gray-300 focus:outline-none outline-none"
            />
          </div>
          {/* Rest of the form */}
          <div className="flex flex-col md:flex-row md:gap-7 mb-4 w-full">
            <div className="mb-3">
              <label className="block text-gray-400 font-semibold text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                name="password"
                className=" shadow-sm appearance-none border rounded w-full py-2 px-3 bg-[#1b2127]  text-gray-300 focus:outline-none "
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-400 font-semibold text-sm mb-2">
                confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                name="confirmPassword"
                className=" shadow-sm appearance-none border rounded w-full py-2 px-3 bg-[#1b2127]  text-gray-300 focus:outline-none "
              />
            </div>
          </div>
          <button
            className=" active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full bg-[#1D232A] md:w-[60%] px-8 py-2 text-xl font-semibold text-white mx-auto text-center"
            type="submit"
          >
            Register
          </button>

          <Link
            className=" text-center font-semibold w-full my-3 py-2 px-4 rounded"
            to="/login"
          >
            already have an account / LOGIN{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
