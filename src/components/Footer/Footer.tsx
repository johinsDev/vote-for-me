import * as React from "react";
import "./footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-16 footer py-4">
      <nav className="flex items-center justify-between">
        <ul className="list-reset flex flex-col sm:flex-row">
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
              className="text-gray-500 px-0 text-xs opacity-75 font-light sm:px-0"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-gray-500 px-0 text-xs opacity-75 font-light sm:px-4"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex flex-col items-center sm:hidden">
          <a
            href="/"
            className="text-gray-500 px-0 text-xs opacity-75 font-light mb-4"
          >
            Folow Us
          </a>
          <div>
            <i className="fab fa-facebook-square pr-2 text-3xl cursor-pointer"></i>
            <i className="fab fa-twitter pl-2 text-3xl cursor-pointer"></i>
          </div>
        </div>

        <ul className="list-reset items-center hidden sm:flex">
          <li>
            <a
              href="/"
              className="text-gray-500 px-0 text-xs opacity-75 font-light sm:px-4"
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
