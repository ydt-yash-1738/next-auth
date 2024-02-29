"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center brightness-70" style={{backgroundImage: "url('/photos/3.jpg')" }}>
      <div className="max-w-md w-full shadow-lg p-5 rounded-lg border-t-4 border-green-500 bg-white opacity-80">
        <h1 className="text-xl md:text-2xl font-bold my-4">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="px-3 py-2 rounded-md border text-sm md:text-base"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="px-3 py-2 rounded-md border text-sm md:text-base"
          />
          <button className="bg-cyan-600 text-white font-bold cursor-pointer px-6 py-2 text-sm md:text-base">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-xs md:text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-xs md:text-sm mt-3 text-right" href={"/register"}>
            Don&apos;t have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
