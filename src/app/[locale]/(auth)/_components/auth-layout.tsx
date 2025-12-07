import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GrGoogle } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center lg:justify-start w-full ">
      {/* Left side */}
      <div className="overflow-hidden lg:block min-h-screen hidden relative w-1/2 shadow-tertiary rounded-l-[40px]">
        <Image src={"/assets/login.png"} alt="" fill />
      </div>

      {/* Right side */}
      <div
        style={{ direction: "ltr" }}
        className="flex flex-col w-full lg:w-1/2 justify-center items-center mt-20"
      >
        <div className="mb-10 -ms-5">
          <h1 className="text-start font-poppins font-medium text-3xl">
            Welcome back!
          </h1>
          <p className="text-start font-poppins font-medium text-base mt-1">
            {" "}
            Enter your Credentials to access your account
          </p>
        </div>
        <div className="w-full max-w-[400px]">{children}</div>
        <div className="flex items-center justify-center gap-2 w-full max-w-[390px] mt-auto">
          <Button variant={"outline"} className="h-8 w-1/2">
            <GrGoogle />
            Sign in with Google
          </Button>
          <Button variant={"outline"} className="h-8 w-1/2">
            <FaApple />
            Sign in with Apple
          </Button>
        </div>
        <div className="flex gap-1 items-center my-10">
          <p className="font-poppins font-medium text-xs">
            Don’t have an account?{" "}
          </p>
          <Link
            href={"#"}
            className="text-sm text-blue-500 font-medium font-poppins"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
