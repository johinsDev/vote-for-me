import * as React from "react";

export default function Notification(): JSX.Element {
  return (
    <div className="border-box p-8 bg-gray-300 flex items-center justify-center">
      <div className="w-1/5">
        <p className="text-xl font-light text-gray-400 leading-snug opacity-75">
          Speak out. Be heard.
        </p>
        <p className="font-black leading-none	text-gray-400 text-4xl">
          Be counted
        </p>
      </div>
      <div className="w-4/5 flex items-center">
        <p className="text-base font-light text-gray-400 opacity-75 mr-4">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>

        <i className="fas fa-times cursor-pointer text-2xl font-light text-gray-400 opacity-75"></i>
      </div>
    </div>
  );
}
