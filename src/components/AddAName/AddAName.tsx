import * as React from "react";
import "./addAName.css";

export default function AddAName(): JSX.Element {
  return (
    <section className="w-full h-32 addAName md:h-24">
      <div className="bg-white opacity-75 flex justify-between flex-col px-2 py-4 h-full w-full items-center md:px-8 md:flex-row">
        <p className="text-gray-400 font-light text-xl text-center md:text-justify md:text-2xl xl:text-3xl">
          Is there anyone else you would want us to add?
        </p>

        <button className="bg-transparent border-gray-400 border-4 p-2 w-40 text-base text-gray-400 md:w-48 md:text-xl">
          Submit Name
        </button>
      </div>
    </section>
  );
}
