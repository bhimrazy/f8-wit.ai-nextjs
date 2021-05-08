import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";
export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("Hello Bad Guys");
  const { speak } = useSpeechSynthesis();
  const commands = [
    // {
    //   command: ["Hello", "Hi"],
    //   callback: ({ command }) => setMessage(`Hi there! You said: "${command}"`),
    //   matchInterim: true,
    // },
    {
      command: ["Hello"],
      callback: ({ command }) => speak({ text: value }),
      matchInterim: true,
    },
    {
      command: "Beijing",
      callback: (command, spokenPhrase, similarityRatio) =>
        setMessage(
          `${command} and ${spokenPhrase} are ${similarityRatio * 100}% similar`
        ),
      // If the spokenPhrase is "Benji", the message would be "Beijing and Benji are 40% similar"
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
    },
    {
      command: ["eat", "sleep", "leave"],
      callback: (command) => setMessage(`Best matching command: ${command}`),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      bestMatchOnly: true,
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   console.log("not supported");
  //   return null;
  // }
  return (
    <div className="px-12 h-full w-full">
      <div className="text-white">
        <p>{message}</p>
        <p>{transcript}</p>
      </div>
      <div className="relative bg-gray-50 shadow-xl rounded-2xl h-full w-full flex flex-col overflow-y-auto">
        <div className="rounded-2xl w-full px-8 py-4 flex flex-col space-y-5 overflow-hidden text-xs text-gray-100">
          <div className="bg-indigo-400 rounded-2xl w-4/6 px-3 py-3 rounded-bl-none">
            Hello Sir, How can I help you ?
          </div>
          <div className="bg-pink-400 rounded-2xl w-4/6 self-end rounded-br-none px-3 py-3 ">
            How are You?
          </div>
          <div className="bg-indigo-400 rounded-2xl w-4/6 px-3 py-3 rounded-bl-none">
            I am fine , Thankyou sir. How about You?
          </div>
          <div className="bg-pink-400 rounded-2xl w-4/6 self-end rounded-br-none px-3 py-3">
            I am also fine.
          </div>
        </div>
        {/* Button Part */}
        <div className="bg-gray-200 absolute bottom-0 rounded-b-2xl w-full py-4 px-8 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <div className="relative">
              {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span> */}
              <svg
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
            <p className="px-2 text-sm text-gray-600">Say "Hello Jarvis"</p>
          </div>
          <svg
            className="w-6 h-6 transform rotate-90 hover:text-gray-700 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
