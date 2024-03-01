"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{backgroundImage: "url('/photos/2.jpg')" }}>
      <div className="max-w-md w-full shadow-lg p-5 rounded-lg border-t-4 border-green-500 bg-white opacity-90">
        <h1 className="text-xl md:text-2xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="px-3 py-2 rounded-md border text-sm"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="px-3 py-2 rounded-md border text-sm"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded-md border text-sm"
          />
          <button className="bg-cyan-600 text-white font-bold cursor-pointer px-6 py-2 text-sm">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link href={"/"} passHref>
            <div className="text-sm text-right underline mt-3 cursor-pointer">Already have an account? Login</div>
          </Link>

        </form>
      </div>
    </div>
  );
}
