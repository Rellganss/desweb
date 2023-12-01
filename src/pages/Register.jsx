import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    
  };

  return (
    <section className="flex w-full">
      <div className="mx-auto w-full flex justify-center mt-20">
        <div className="mx-auto bg-white p-8 border m-10">
          <h1 className="text-center text-4xl font-semibold mb-5">Register</h1>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to="/landing">
            <button
              className="w-full bg-gray-900 text-white py-2 rounded-md"
              type="submit"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </Link>
          
          <p className="text-center mt-4">
            Don't have an account?
            <a href="#" className="text-blue-500 ml-1">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

