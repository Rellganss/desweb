import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = () => {
    // Validasi input data
    if (!username || !email || !password || !fullName) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate registration logic
    const newUser = {
      username: username,
      email: email,
      password: password,
      fullName: fullName,
    };

    // Check if user already exists (for simplicity, you can improve this check in a real application)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = existingUsers.some(user => user.username === newUser.username);

    if (isUserExists) {
      alert("Username already exists. Please choose a different username.");
    } else {
      // Save the new user to localStorage
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Registration successful!");
      // Handle successful registration, e.g., redirect to a dashboard page
    }
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
            <button
              className="w-full bg-gray-900 text-white py-2 rounded-md"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>
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
