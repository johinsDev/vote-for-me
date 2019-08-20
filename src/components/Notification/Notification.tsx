import * as React from "react";
import "./notification.css";

export default function Notification(): JSX.Element {
  return (
    <div className="border-box p-8 bg-gray-300 flex items-center justify-center relative flex-col md:flex-row">
      <div className="flex-col flex w-full mr-0 md:w-1/5 sm:flex-row sm:items-start sm:justify-start md:flex-col md:mr-4">
        <p className="text-md font-light text-gray-400 leading-snug opacity-75 mr-4 md:mr-0 lg:text-lg">
          Speak out. Be heard.
        </p>
        <p className="font-black leading-none	text-gray-400 text-2xl lg:text-2xl xl:text-4xl">
          Be counted
        </p>
      </div>
      <div className="w-full md:w-4/5 flex items-center mt-8 md:mt-0">
        <p className="text-base font-light text-gray-400 opacity-75 mr-4 text-justify">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>

        <i className="fas fa-times cursor-pointer text-2xl font-light text-gray-400 opacity-75 absolute close-icon md:relative"></i>
      </div>
    </div>
  );
}
