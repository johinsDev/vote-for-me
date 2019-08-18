import * as React from "react";
import Hero from "../components/Hero/Hero";
import Notification from "../components/Notification/Notification";

export default function HomePage(): JSX.Element {
  return (
    <div className="h-full w-full">
      <Hero />

      <div className="mx-auto px-32 py-8">
        <Notification />
      </div>
    </div>
  );
}
