import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [mic, setMic] = useState(false);
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("Hello There , How can I help You ?");
  const { speak } = useSpeechSynthesis();
  const Greeting = {
    message: "I am fine,Thank You . What about you , Sir ? ",
    type: "jarvis",
  };
  const commands = [
    // {
    //   command: ["Hello", "Hi"],
    //   callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
    //   matchInterim: true,
    // },
    {
      command: ["Hello", "Hi"],
      callback: ({ command }) => {
        speak({ text: value });
        setMessages((state) => [...state, newMessage]);
      },
      // matchInterim: true,
    },
    {
      command: ["How"],
      callback: ({ command }) => {
        speak({ text: Greeting });
        setMessages((state) => [...state, Greeting]);
      },
      // matchInterim: true,
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  if (mic) {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  }
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log("not supported");
    return null;
  }
  const newMessage = {
    message: "Hello There , How can I help You ?",
    type: "jarvis",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((state) => [
      ...state,
      {
        message: message,
        type: "user",
      },
    ]);
    setMessage("");
    resetTranscript();
    // alert(`Submitting Name ${message}`);
  };
  const handleMic = () => {
    setMic((v) => !v);
  };
  useEffect(() => {
    setTimeout(() => {
      setMessages((state) => [...state, newMessage]);
      setMic((v) => !v);
      speak({ text: newMessage.message });
    }, 3000);
  }, []);
  return (
    <div className="px-12 h-full w-full flex flex-col">
      <div className="relative bg-gray-50 shadow-xl rounded-2xl h-full w-full flex flex-col items-center">
        <div className="rounded-2xl w-full h-80 px-8 py-4 pb-8 flex flex-col space-y-5 overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-track-gray-rounded scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch max-h-80 text-xs text-gray-100">
          {messages && messages.length != 0 ? (
            messages.map((msg, index) => (
              <>
                <div
                  key={index}
                  className={` ${
                    msg.type == "jarvis"
                      ? `bg-indigo-400 rounded-2xl w-4/6 px-3 py-3 rounded-bl-none`
                      : `bg-pink-400 rounded-2xl w-4/6 self-end rounded-br-none px-3 py-3 `
                  }`}
                >
                  {msg.message}
                </div>
              </>
            ))
          ) : (
            <div className="justify-center items-center text-purple-600 flex py-4">
              <p className="text-2xl font-poppins font-bold">
                Welcome To Jarvis !!!
              </p>
            </div>
          )}
        </div>
        {/* Button Part */}
        <div className="bg-gray-200 absolute bottom-0 rounded-b-2xl w-full py-4 px-8 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <div className="relative">
              {mic && (
                <span
                  onClick={handleMic}
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 bg-opacity-50"
                ></span>
              )}
              <svg
                onClick={handleMic}
                className="w-6 h-6 text-gray-600 border-1 border-purple-500 rounded-full cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="px-2 text-xs text-gray-600 whitespace-nowrap">
              Say "Hello"
            </p>
          </div>
          <form
            className="flex flex-row w-5/6 justify-around space-x-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-full w-full px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-400"
            />
            <button type="submit">
              <svg
                className="w-6 h-6 transform rotate-90 hover:text-gray-700 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      {transcript && (
        <p className="text-xs font-light text-cyan-400 py-2">
          Transcript : {transcript}
        </p>
      )}
    </div>
  