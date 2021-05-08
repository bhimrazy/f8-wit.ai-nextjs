import React from "react";
import Chatbox from "./Chatbox";

export default function Main() {
  return (
    <main className="flex flex-col max-w-7xl px-10">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 py-20 items-center font-poppins">
        <div className="flex flex-col pr-10">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-cyan-400 text-5xl">JARVIS</span>
            <br /> A Voice Assistant
          </h1>
          <p className="text-white text-sm py-6 break-words font-light">
            Voice makes it easier and faster for people to get things done,
            access information, and connect with your business. AI can be used
            to improve people’s lives and help them stay on track to achieve
          </p>
          <div className="py-10">
            <button className="bg-gray-50 px-16 py-2 rounded-full transition-all duration-500 hover:bg-gray-300 focus:outline-none">
              Try Now
            </button>
          </div>
        </div>
        <Chatbox />
      </section>
    </main>
  );
}
