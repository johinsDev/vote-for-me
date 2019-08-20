import * as React from "react";
import "./character.css";

export default function VoteButton({
  like = true,
  onClick,
  className = "",
  focus,
}: {
  like?: boolean;
  className?: string;
  focus?: boolean;
  onClick?: () => void;
}): JSX.Element {
  return (
    <div
      data-testid={`${like ? "up" : "down"}-button`}
      onClick={onClick}
      className={`${like ? "bg-like" : "bg-unlike"} ${className} ${
        focus ? "border-2" : "no-focus"
      } h-8 w-8 flex items-center justify-center mr-4  cursor-pointer`}
    >
      <i
        className={`${like ? "fa-thumbs-up" : "fa-thumbs-down"} fas text-white`}
      ></i>
    </div>
  );
}
