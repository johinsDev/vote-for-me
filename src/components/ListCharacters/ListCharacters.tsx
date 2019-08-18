import * as React from "react";
import CharacterCard from "./ui/CharacterCard";

const characters: number[] = [1, 2, 3, 4];

export default function ListCharacters(): JSX.Element {
  return (
    <section className="mt-8">
      <h3 className="text-4xl font-hairline text-gray-400  opacity-75 mb-8 md:text-5xl">
        Votes
      </h3>
      <div className="flex flex-wrap -mx-4">
        {characters.map((i: number) => (
          <div className="w-full md:w-1/2 px-4 pb-8" key={i}>
            <CharacterCard />
          </div>
        ))}
      </div>
    </section>
  );
}
