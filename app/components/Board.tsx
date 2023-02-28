"use client";

import { useState } from "react";

import BoardItem from "./BoardItem";
import EmptyBoardItem from "./EmptyBoardItem";
import RevealedBoardItem from "./RevealedBoardItem";
enum CardState  {
  hidden = "hidden",
  showing ="showing",
  found = "found"
}
export interface Props {
  pokeArr: {
    name: string;
    url: string;
    id: string;
    imageUrl: string;
  }[];
}

export default function Board({ pokeArr }: Props) {
  const stateArr: CardState[] = [];
  for (let i = 0; i < pokeArr.length; i++) {
    stateArr.push(CardState.hidden);
  }
  const [showCard, setShowCard] = useState<CardState[]>(stateArr);
  const [selected, setSelected] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  const [prev, setPrev] = useState(0)

  const addScore = ()=>{
    
  }
  const revealCard = (e: React.MouseEvent) => {
    const name = e.currentTarget.children[0].innerHTML
    const id = parseInt(e.currentTarget.id);

    if(selected.length === 1){
      setMoves(prevState => prevState+1)
    
    }
    if(selected.length === 2){
    
      setSelected([id])
      setShowCard(prev=> prev.map((item)=> {
        return item = CardState.hidden
      }))
    } else {
      setSelected(prev=>[...prev, id])
    }
    
 
    setShowCard((prevState) =>
      prevState.map((item, index) => {
        if (index === id) {
          item = CardState.showing;
        }
        return item;
      })
    );
  };

  
  return (<div className="w-full">
    <div className="flex justify-evenly w-full p-4">

    <h3 className="font-bold text-white text-3xl">Moves: {moves}</h3>
    <h3 className="font-bold text-white text-3xl">Previous: {prev}</h3>
    </div>
    <div className="p-8 grid grid-cols-auto gap-4 w-full justify-items-center">
      {pokeArr.map((poke, index) => (
     
        <div key={index}>
          {showCard[index] === CardState.showing ? (
           <BoardItem
           
           index={index.toString()}
           imageUrl={poke.imageUrl}
           name={poke.name}
           
         />
        
          ) :(<></>)
          }
          {showCard[index] === CardState.hidden ? (
           <EmptyBoardItem handleClick={revealCard} index={index.toString()} name={poke.name}/>
        
          ) :(<></>)
          }
          {showCard[index] === CardState.found ? (
           <RevealedBoardItem index={index.toString()}/>
        
          ) :(<></>)
          }
        </div>
      ))}
    </div></div>
  );
}
