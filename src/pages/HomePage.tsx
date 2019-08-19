import * as React from "react";
import Notification from "../components/Notification/Notification";
import ListCharacters from "../components/ListCharacters/ListCharacters";
import AddAName from "../components/AddAName/AddAName";
import Footer from "../components/Footer/Footer";
import getRulings from "../services/getRulings";

export default function HomePage(): JSX.Element {
  const { data } = getRulings();

  return (
    <div className="h-full w-full">
      <div className="mx-auto lg:px-32 px-8 py-8">
        <Notification />

        <ListCharacters rulings={data.rulings} />

        <AddAName />

        <Footer />
      </div>
    </div>
  );
}
