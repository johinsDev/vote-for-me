import * as React from "react";
import "./hero.css";
import Nav from "../Nav/Nav";
import Card from "../Card/Card";

export default function Hero(): JSX.Element {
  return (
    <header className="h-screen w-full">
      <Nav />
      <div className="bg-cover bg-bottom hero absolute inset-0">
        <div className="mx-auto h-full relative b-inherit">
          <div className="lg:px-32 px-8 container-card flex pt-12 items-center justify-start">
            <Card />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex">
            <div className="flex justify-end px-4 w-4/12 relative clonsing-ing items-center">
              <span>CLOSING ING</span>
            </div>
            <div className="flex justify-start items-center px-4 w-8/12 days text-2xl md:text-3xl">
              <span>
                <strong>22</strong> DAYS
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
