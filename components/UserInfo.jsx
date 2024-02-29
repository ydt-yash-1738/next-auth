"use client";
import VideoBackground from "./VideoBackground";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="relative">
      <VideoBackground preload />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 bg-white rounded-lg opacity-60">
          <div className="opacity-100">
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div className="opacity-100">
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => signOut()}
            className="bg-cyan-600 text-white font-bold px-6 py-2 mt-3 opacity-100"
          >
            Log Out
          </button>
          <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 rounded-lg opacity-80">
          <h1 className="text-xl font-extrabold">Thank you so much for using our service!!</h1>
          
          <div className="opacity-100 text-bold underline">
            
            Let&#39;s connect <span className="font-extrabold"></span>
          </div>
          <div className="opacity-100">
            <a
              href="https://www.linkedin.com/in/ydt1738/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-extrabold hover:underline"
            >
              LinkedIn - Yashdev Tiwari
            </a>
          </div>
          <div className="opacity-100">
            <a
              href="https://github.com/ydt-yash-1738"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-extrabold hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className="opacity-100">
            <a
              href="https://ydt-yash-1738.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-extrabold hover:underline"
            >
              Portfolio
            </a>
          </div>
            <div className="opacity-100">
              <a
                href="https://mail.google.com/mail/?view=cm&to=yashdt50@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-extrabold hover:underline"
              >
                Email
              </a>
            </div>

          
        </div>
        </div>
        

      </div>
    </div>
  );
}
