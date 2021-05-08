import React from "react";

export default function Header() {
  return (
    <header className="max-w-7xl container mx-auto px-10 border-b-1 border-white">
      <nav className="text-white flex flex-row items-center justify-between font-poppins py-4">
        <a className="flex flex-row space-x-1 items-center justify-center">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xl font-semibold text-white">wit-chat</span>
        </a>
        <ul>
          <li className="">Home</li>
        </ul>
      </nav>
    </header>
  );
}
