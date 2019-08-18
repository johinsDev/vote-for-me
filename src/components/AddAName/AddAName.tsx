import * as React from "react";
import "./addAName.css";

export default function AddAName(): JSX.Element {
  return (
    <section className="w-full h-24 addAName">
      <div className="bg-white opacity-75 flex justify-between px-8 py-4 h-full w-full items-center">
        <p className="text-gray-400 font-light text-3xl">
          Is there anyone else you would want us to add?
        </p>

        <button className="bg-transparent border-gray-400 border-4 p-2 w-48 text-xl text-gray-400">
          Submit Name
        </button>
      </div>
    </section>
  );
}
