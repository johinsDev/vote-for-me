import * as React from "react";
import "./nav.css";
import { useWindowScroll } from "../../uitls/useWindowScroll";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

function Nav({ history }: RouteComponentProps): JSX.Element {
  const { y } = useWindowScroll();

  const navElement = document.getElementById("nav");
  const menu = document.getElementById("menu-toggle");

  const goTo = (path: string): void => {
    history.push(path);
    if (menu) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      menu.checked = false;
    }
  };

  React.useEffect(() => {
    if (y > 140) {
      if (navElement) {
        navElement.classList.add("text-black");
        navElement.classList.add("bg-white");
        navElement.classList.add("shadow-lg");
        navElement.classList.add("opacity-90");
        navElement.classList.remove("text-white");
        navElement.classList.remove("nav");
      }
    } else {
      if (navElement) {
        navElement.classList.remove("text-black");
        navElement.classList.remove("bg-white");
        navElement.classList.remove("opacity-90");
        navElement.classList.remove("shadow-lg");
        navElement.classList.add("text-white");
        navElement.classList.add("nav");
      }
    }
  }, [navElement, y]);

  return (
    <>
      <nav
        id="nav"
        className="nav text-white flex justify-between lg:px-32 px-8 flex-wrap py-6 items-center fixed right-0 left-0 z-10 transition"
      >
        <div className="flex-1 flex justify-between items-center">
          <Link to="/" className=" title bold">
            Rule of thumb
          </Link>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg
            className="fill-current "
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

        {/* MENU RESPONSIVE */}
        <div className="fixed inset-0 bg-white z-50 p-12 hidden" id="menu">
          <div className="flex justify-between items-center">
            <span
              onClick={(): void => goTo("/")}
              className="text-like text-4xl bold"
            >
              Rule of thumb
            </span>
            <label
              htmlFor="menu-toggle"
              className="pointer-cursor md:hidden block"
            >
              <i className="fas fa-times cursor-pointer text-2xl font-light text-gray-400 opacity-75 close-icon"></i>
            </label>
          </div>

          <ul className="list-reset flex flex-col">
            <li className="px-8 py-8" style={{ color: "black" }}>
              <span onClick={(): void => goTo("/past-trials")} className="link">
                Past trials
              </span>
              <i className="fas fa-chevron-right ml-4"></i>
            </li>
            <li className="px-8 py-8" style={{ color: "black" }}>
              <span
                onClick={(): void => goTo("/how-it-works")}
                className="link"
              >
                How It Works
              </span>
              <i className="fas fa-chevron-right ml-4"></i>
            </li>
            <li className="px-8 py-8" style={{ color: "black" }}>
              <span onClick={(): void => goTo("/login")} className="link">
                Log In / Sign Up
              </span>
              <i className="fas fa-chevron-right ml-4"></i>
            </li>
          </ul>

          <button className="bg-transparent border-like border-4 p-2 w-40 text-base text-like button-register">
            Log In / Sign Up
          </button>
        </div>

        {/* MENU  */}
        <div className="hidden md:flex md:items-center md:w-auto w-full">
          <ul className="list-reset flex">
            <li>
              <Link to="/past-trials" className=" lg:px-8 px-4 py-2 link">
                Past trials
              </Link>
            </li>
            <li>
              <Link to="how-it-works" className=" lg:px-8 px-4 py-2 link">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/login" className=" lg:px-8 px-4 py-2 link">
                Log In / Sign Up
              </Link>
            </li>
            <li>
              <i className="fas fa-search lg:px-8 px-4 " />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Nav);
