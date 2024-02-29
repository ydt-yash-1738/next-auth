"use client";
import VideoBackground from "./VideoBackground";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="relative">
      <VideoBackground />
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
        </div>
      </div>
    </div>
  );
}
