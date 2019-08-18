import * as React from "react";
import "./nav.css";

export default function Nav(): JSX.Element {
  return (
    <nav className="nav flex justify-between px-32 py-6 items-center">
      <a href="/" className="text-white title bold">
        Rule of thumb
      </a>
      <ul className="list-reset flex">
        <li>
          <a href="/" className="text-white px-8">
            Past trials
          </a>
        </li>
        <li>
          <a href="/" className="text-white px-8 whitespace-no-wrap">
            How It Works
          </a>
        </li>
        <li>
          <a href="/" className="text-white px-8">
            Log In / Sign Up
          </a>
        </li>
        <li>
          <i className="fas fa-search px-8 text-white" />
        </li>
      </ul>
    </nav>
  );
}
