import * as React from "react";
import Notification from "../components/Notification/Notification";
import ListCharacters from "../components/ListCharacters/ListCharacters";
import AddAName from "../components/AddAName/AddAName";
import Footer from "../components/Footer/Footer";

export default function HomePage(): JSX.Element {
  return (
    <div className="h-full w-full">
      <div className="mx-auto lg:px-32 px-8 py-8">
        <Notification />

        <ListCharacters />

        <AddAName />

        <Footer />
      </div>
    </div>
  );
}
