import * as React from "react";
import CharacterCard from "./ui/CharacterCard";

const characters: number[] = [1, 2, 3, 4];

export default function ListCharacters(): JSX.Element {
  return (
    <section className="mt-8">
      <h3 className="text-5xl font-hairline text-gray-400  opacity-75 mb-8">
        Votes
      </h3>
      <div className="flex flex-wrap -mx-4">
        {characters.map(() => (
          <div className="w-full lg:w-1/2 px-4 pb-8">
            <CharacterCard />
          </div>
        ))}
      </div>
    </section>
  );
}
