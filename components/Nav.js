import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <div>
      <nav className="">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <Link href="/">
              <p className="md:text-xl font-medium hover:text-blue-400 cursor-pointer">
                Leo Wang
              </p>
            </Link>
            <div>
              <Link href="/about">
                <p className=" md:text-xl font-medium hover:text-blue-400 cursor-pointer">
                  About
                </p>
              </Link>
              {/* <button>dark</button> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
