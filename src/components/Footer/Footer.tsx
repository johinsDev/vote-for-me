import * as React from "react";
import "./footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-16 footer py-4">
      <nav className="flex items-center justify-between">
        <ul className="list-reset flex">
          <li>
            <a
              href="/"
              className="text-gray-500 pr-4 text-xs opacity-75 font-light"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 px-4 text-xs opacity-75 font-light"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 px-4 text-xs opacity-75 font-light"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <ul className="flex list-reset items-center">
          <li>
            <a
              href="/"
              className="text-gray-500 px-4 text-xs opacity-75 font-light"
            >
              Folow Us
            </a>
          </li>
          <li>
            <i className="fab fa-facebook-square pr-2 text-3xl cursor-pointer"></i>
          </li>
          <li>
            <i className="fab fa-twitter pl-2 text-3xl cursor-pointer"></i>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
