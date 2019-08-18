import * as React from "react";
import "./character.css";

const img = "https://i.ibb.co/tzSftFH/Layer-13.png";

function VoteButton({
  like = true,
  className = "",
}: {
  like?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`${
        like ? "bg-like" : "bg-unlike"
      } ${className} h-8 w-8 flex items-center justify-center mr-4 border-2 cursor-pointer`}
    >
      <i
        className={`${like ? "fa-thumbs-up" : "fa-thumbs-down"} fas text-white`}
      ></i>
    </div>
  );
}

export default function CharacterCard(): JSX.Element {
  return (
    <article className="character bg-white border overflow-hidden relative">
      {/* BACKGROUND IMAGE */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={img}
        alt="character"
      />

      {/* GRADIENT */}
      <div className="gradient h-full w-full absolute" />

      <div className="absolute inset-x-0 bottom-0">
        {/* INFOR FOR VOTE */}
        <div className="pl-12 pr-6 pb-4 lg:pb-12 xl:pr-12">
          <div className="relative">
            <VoteButton className="absolute bottom-0 -left-3" />
            <p className="text-white font-normal text-2xl leading-none sm:text-3xl lg:text-4xl xl:text-5xl">
              Cristina Fernandéz de Kitcher
            </p>
          </div>

          <p className="text-white text-xs leading-none my-2">
            <strong>1 month ago</strong> in Entertaiment
          </p>

          <p className="text-white font-light leading-none opacity-75 my-6">
            Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean
            eu velit libero.
          </p>

          <div className="flex items-center">
            <VoteButton />

            <VoteButton like={false} />

            <button className="bg-transparent text-white  p-2 border text-sm">
              Vote now
            </button>
          </div>
        </div>

        {/* PERCENTAGE */}
        <div className="h-12 flex">
          <div className="w-3/5 flex items-center justify-start bg-like px-2">
            <i className="fas fa-thumbs-up text-2xl text-white"></i>
            <span className="text-white text-2xl ml-2 font-light">64%</span>
          </div>
          <div className="w-2/5 flex items-center justify-start bg-unlike px-2 opacity-75">
            <i className="fas fa-thumbs-down text-2xl text-white "></i>
            <span className="text-white text-2xl ml-2 font-light opacity-75">
              36%
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
