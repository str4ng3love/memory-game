"use client";

import { useEffect } from "react";



interface Props {
  moves: number;
  previousMoves?: number | undefined;
  handleClick: (e:React.MouseEvent) => void;
}
export default function GameOver({ moves, previousMoves, handleClick }: Props) {
    useEffect(()=>{
      let body =  document.querySelector('body')
     
      if(body)
      body.style.overflow='hidden'
    }, [])
  return (
    <div className="absolute w-[100%]  h-[100dvh] flex items-center justify-center font-mono">
      <div className="flex flex-col bg-black p-4 rounded-md text-white min-w-[500px] items-center  shadow-black shadow-lg">
        <div>
          <h2 className="font-bold text-2xl mb-4">GAME OVER</h2>
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
            <button onClick={(e)=>{
                handleClick(e);
                 let body =  document.querySelector('body')
                 
                 if(body)
                 body.style.overflow='auto'
            }} className="p-4 text-slate-900 rounded-md bg-slate-100 hover:bg-slate-900 hover:text-slate-100 active:bg-slate-700 active:text-slate-300 uppercase">Try again</button>
        </div>
      </div>
    </div>
  );
}
