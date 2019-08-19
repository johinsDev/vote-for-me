import * as React from "react";
import CharacterCard from "./ui/CharacterCard";
import { Ruling } from "../../services/getRulings";

export default function ListCharacters({
  rulings,
}: {
  rulings: Ruling[];
}): JSX.Element {
  return (
    <section className="mt-8">
      <h3 className="text-4xl font-hairline text-gray-400  opacity-75 mb-8 md:text-5xl">
        Votes
      </h3>
      <div className="flex flex-wrap -mx-4">
        {rulings
          .filter((ruling: Ruling) => !ruling.isMain)
          .map((ruling: Ruling) => (
            <div className="w-full md:w-1/2 px-4 pb-8" key={ruling.id}>
              <CharacterCard ruling={ruling} />
            </div>
          ))}
      </div>
    </section>
  );
}
