"use client";

import { signOut, useSession, signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        <span className="pr-2">
          Welcome :
          <span className="pl-1 font-bold text-sky-500">{session.user.name}</span>
        </span>
        <span>
          <button onClick={() => signOut()}>
            |
            <span className=" ml-2 border border-tpblue px-5 py-2  font-semibold rounded-sm text-sm text-tpblue   hover:bg-tpblue hover:text-white">
              Logout
            </span>
          </button>
        </span>
      </div>
    );
  }

  return (
    <button onClick={() => signIn()}>
      <span className="border border-tpblue px-5 py-2  font-semibold rounded-sm text-sm text-tpblue   hover:bg-tpblue hover:text-white">
        Sign In
      </span>
    </button>
  );
};

export default SignIn;
