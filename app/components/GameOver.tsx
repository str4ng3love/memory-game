"use client";

import { useEffect } from "react";

interface Props {
  moves: number;
  previousMoves?: number | undefined;
  handleClick: (e: React.MouseEvent) => void;
}
export default function GameOver({ moves, previousMoves, handleClick }: Props) {
  useEffect(() => {
    let body = document.querySelector("body");

    if (body) body.style.overflow = "hidden";
  }, []);
  return (
    <div className="absolute flex  h-[100dvh] w-[100%] items-center justify-center font-mono">
      <div className="flex min-w-[500px] flex-col items-center rounded-md bg-black/80 p-4 text-white  shadow-lg shadow-black">
        <div>
          <h2 className="mb-4 text-xl font-bold md:text-2xl">GAME OVER</h2>
        </div>
        <div className="flex flex-col">
          <span>
            It took you <span className="font-bold text-blue-500">{moves}</span>{" "}
            moves to complete the game.
          </span>
          {previousMoves ? (
            <span>
              Your previous attempt took you{" "}
              <span className="font-bold text-blue-500">{previousMoves}</span>{" "}
              moves.
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="p-8">
          <button
            onClick={(e) => {
              handleClick(e);
              let body = document.querySelector("body");

              if (body) body.style.overflow = "auto";
            }}
            className="rounded-md bg-slate-100 p-4 uppercase text-slate-900 hover:bg-slate-900 hover:text-slate-100 active:bg-slate-700 active:text-slate-300"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
