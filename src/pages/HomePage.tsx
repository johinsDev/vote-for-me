import * as React from "react";
import Hero from "../components/Hero/Hero";
import Notification from "../components/Notification/Notification";
import ListCharacters from "../components/ListCharacters/ListCharacters";
import AddAName from "../components/AddAName/AddAName";
import Footer from "../components/Footer/Footer";

export default function HomePage(): JSX.Element {
  return (
    <div className="h-full w-full">
      <Hero />

      <div className="mx-auto lg:px-32 px-8 py-8">
        <Notification />

        <ListCharacters />

        <AddAName />

        <Footer />
      </div>
    </div>
  );
}
