import * as React from "react";
import "./card.css";

export default function Card(): JSX.Element {
  return (
    <article className="max-w-lg w-3/5 overflow-hidden card relative">
      <div className="blur center"></div>

      <div className="center overflow">
        <div className="p-8 content-box text-white">
          <p className="opacity-50">What’s your opinion on</p>
          <h5 className="text-4xl md:text-5xl lg:text-6xl leading-none">
            Pope Francis?
          </h5>
          <p className="description font-light mt-4 md:mt-8">
            He’s talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </p>

          <p className="my-2 sm:my-6">
            <i className="fab fa-wikipedia-w mr-2"></i>
            <a href="/" className="font-light text-sm underline">
              More information
            </a>
          </p>

          <p className="text-xl font-bold">What’s Your Verdict?</p>
        </div>
      </div>
      <div className="h-12 flex absolute inset-x-0 bottom-0 md:h-16">
        <div className="w-1/2 flex items-center justify-center bg-like cursor-pointer">
          <i className="fas fa-thumbs-up text-2xl text-white md:text-4xl"></i>
        </div>
        <div className="w-1/2 flex items-center justify-center bg-unlike cursor-pointer">
          <i className="fas fa-thumbs-down text-2xl text-white md:text-4xl"></i>
        </div>
      </div>
    </article>
  );
}
