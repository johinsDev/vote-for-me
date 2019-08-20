import * as React from "react";

import "./character.css";
import Percentage from "./Percentage";
import { Ruling } from "../../../services/getRulings";
import usePercentageVotes from "../../../uitls/usePercentageVotes";
import VoteButton from "./VoteButton";
import db from "../../../services/db";

export default function CharacterCard({
  ruling,
}: {
  ruling: Ruling;
}): JSX.Element {
  const [$ruling, setRuling] = React.useState<Ruling>(ruling);

  const [voteAgain, setVoteAgain] = React.useState<boolean>(false);

  const [focus, setFocus] = React.useState<"down" | "up" | null>(null);

  const { percentageDown, percentageUp } = usePercentageVotes({
    totalDown: $ruling.votesDown,
    totalUp: $ruling.votesUp,
  });

  const setDown = React.useCallback(() => {
    if (focus === "down") {
      setFocus(null);
    } else {
      setFocus("down");
    }
  }, [focus]);

  const setUp = React.useCallback(() => {
    if (focus === "up") {
      setFocus(null);
    } else {
      setFocus("up");
    }
  }, [focus]);

  const vote = React.useCallback(() => {
    if (voteAgain) {
      setVoteAgain(false);
      setFocus(null);

      return;
    }

    let votesDown = parseInt($ruling.votesDown, 10);
    let votesUp = parseInt($ruling.votesUp, 10);

    if (focus === "down") {
      votesDown = votesDown + 1;
    } else {
      votesUp = votesUp + 1;
    }

    db.table("rulings")
      .update($ruling.id, { votesUp, votesDown })
      .then(() => {
        setRuling({
          ...$ruling,
          votesDown: `${votesDown}`,
          votesUp: `${votesUp}`,
        });
      });

    setVoteAgain(true);
  }, [$ruling, focus, voteAgain]);

  return (
    <article className="character bg-white border overflow-hidden relative">
      {/* BACKGROUND IMAGE */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={$ruling.image}
        alt="character"
      />

      {/* GRADIENT */}
      <div className="gradient h-full w-full absolute" />

      <div className="absolute inset-x-0 bottom-0">
        {/* INFOR FOR VOTE */}
        <div className="pl-12 pr-6 pb-4 lg:pb-12 xl:pr-12">
          <div className="relative">
            <VoteButton
              className="absolute bottom-0 -left-3"
              like={percentageUp > percentageDown}
            />
            <p className="text-white font-normal text-2xl leading-none sm:text-3xl lg:text-4xl xl:text-5xl">
              {$ruling.name}
            </p>
          </div>

          <p className="text-white text-xs leading-none my-2">
            <strong>{$ruling.timeIn}</strong> in {$ruling.category}
          </p>

          <p className="text-white font-light leading-none opacity-75 my-6">
            {voteAgain ? "Thank for you voting!" : $ruling.description}
          </p>

          <div className="flex items-center h-8">
            {!voteAgain && (
              <>
                <VoteButton onClick={setUp} focus={focus === "up"} />

                <VoteButton
                  like={false}
                  onClick={setDown}
                  focus={focus === "down"}
                />
              </>
            )}

            {(focus || voteAgain) && (
              <button
                data-testid="vote-now"
                className="bg-transparent text-white p-2 border text-sm focus:outline-none"
                onClick={vote}
              >
                {voteAgain ? "Vote again" : "Vote now"}
              </button>
            )}
          </div>
        </div>

        {/* PERCENTAGE */}
        <Percentage
          percentageDown={percentageDown}
          percentageUp={percentageUp}
        />
      </div>
    </article>
  );
}
