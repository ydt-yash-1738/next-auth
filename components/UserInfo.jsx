"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="bg-cover bg-center min-h-screen flex justify-center items-center" style={{backgroundImage: "url('/photos/1.jpg')" }}>
      <div className="shadow-lg bg-opacity-80 bg-white rounded-lg p-4 md:p-8 text-center">
        <div className="font-bold text-base md:text-lg mb-4">Name: {session?.user?.name}</div>
        <div className="font-bold text-base md:text-lg mb-4">Email: {session?.user?.email}</div>
        <button
          onClick={() => signOut()}
          className="bg-cyan-600 text-white font-bold px-4 md:px-6 py-2 mt-4"
        >
          Log Out
        </button>
        <div className="mt-6">
          <h1 className="text-lg md:text-xl font-bold">Thank you for using our service!</h1>
          <div className="font-bold underline mt-4">
            Let&apos;s connect:
          </div>
          <div className="mt-2">
            <a
              href="https://www.linkedin.com/in/ydt1738/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold hover:underline text-sm md:text-base"
            >
              LinkedIn - Yashdev Tiwari
            </a>
          </div>
          <div className="mt-2">
            <a
              href="https://github.com/ydt-yash-1738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold hover:underline text-sm md:text-base"
            >
              GitHub
            </a>
          </div>
          <div className="mt-2">
            <a
              href="https://ydt-yash-1738.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold hover:underline text-sm md:text-base"
            >
              Portfolio
            </a>
          </div>
          <div className="mt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yashdt50@gmail.com&body=Body%20Here"
              className="text-black font-bold hover:underline text-sm md:text-base"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
