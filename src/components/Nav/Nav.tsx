import * as React from "react";
import "./nav.css";

export default function Nav(): JSX.Element {
  return (
    <nav className="nav flex justify-between lg:px-32 px-8 flex-wrap py-6 items-center">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-white title bold">
          Rule of thumb
        </a>
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      <div className="hidden md:flex md:items-center md:w-auto w-full">
        <ul className="list-reset flex">
          <li>
            <a href="/" className="text-white lg:px-8 px-4 py-2 link">
              Past trials
            </a>
          </li>
          <li>
            <a href="/" className="text-white lg:px-8 px-4 py-2 link">
              How It Works
            </a>
          </li>
          <li>
            <a href="/" className="text-white lg:px-8 px-4 py-2 link">
              Log In / Sign Up
            </a>
          </li>
          <li>
            <i className="fas fa-search lg:px-8 px-4 text-white" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
