import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = () => {
    // Handle registration logic here
  };

  return (
    <>
      <section className="flex w-full h-screen">
        <div className="mx-auto w-full flex justify-center my-auto">
          <div className="mx-auto bg-white p-8 border m-10 h-auto">
            <h1 className="text-center text-4xl font-semibold mb-5">Create an Account</h1>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <Link to="/landing">
              <button
                className="w-full bg-gray-900 text-white py-2 rounded-md"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </button>
            </Link>

            <p className="text-center mt-4">
              Already have an account?
              <Link to="/">
                <a className="text-blue-500 ml-1">
                  Sign in
                  </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
