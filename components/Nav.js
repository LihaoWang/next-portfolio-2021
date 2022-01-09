import React from "react";
import Link from "next/link";
import { useTheme, useUpdateTheme } from "../ToggleContext";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
function Nav() {
  const darkTheme = useTheme();
  const updateTheme = useUpdateTheme();
  return (
    <div>
      <nav className="dark:bg-black">
        <div className="max-w-screen-lg mx-auto px-4 md:px-0 dark:text-white ">
          <div className="relative flex items-center justify-between h-16">
            <Link href="/">
              <p className="md:text-xl font-medium hover:text-blue-400 cursor-pointer">
                Leo Wang
              </p>
            </Link>
            <div className="flex flex-row gap-5 items-center justify-center">
              <Link href="/about">
                <p className=" md:text-xl font-medium hover:text-blue-400 cursor-pointer">
                  About
                </p>
              </Link>
              <div
                className="md:text-l cursor-pointer bg-gray-200 p-3 rounded-full dark:bg-gray-700"
                onClick={updateTheme}
              >
                {darkTheme ? <BsSunFill /> : <BsMoonFill />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
