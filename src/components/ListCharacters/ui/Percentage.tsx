import * as React from "react";

export default function Percentage({
  percentageDown,
  percentageUp,
}: {
  percentageDown: string;
  percentageUp: string;
}): JSX.Element {
  return (
    <div className="h-12 flex">
      {percentageDown !== "100" && (
        <div
          className="flex items-center justify-start bg-like px-2"
          style={{
            width: `${
              percentageUp === "0" && percentageDown === "0"
                ? "50"
                : percentageUp
            }%`,
          }}
        >
          <i className="fas fa-thumbs-up text-2xl text-white"></i>
          <span className="text-white text-2xl ml-2 font-light">
            {percentageUp}%
          </span>
        </div>
      )}
      {percentageUp !== "100" && (
        <div
          className="flex items-center justify-start bg-unlike px-2 opacity-75"
          style={{
            width: `${
              percentageUp === "0" && percentageDown === "0"
                ? "50"
                : percentageDown
            }%`,
          }}
        >
          <i className="fas fa-thumbs-down text-2xl text-white "></i>
          <span className="text-white text-2xl ml-2 font-light opacity-75">
            {percentageDown}%
          </span>
        </div>
      )}
    </div>
  );
}
