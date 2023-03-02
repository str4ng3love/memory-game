"use client";

import { GetPokemon } from "@/services/Pokemon";
import RandomizePokemon, { separateTypes } from "@/utils/Pokemon";

import { useEffect, useState } from "react";

import BoardItem from "./BoardItem";
import EmptyBoardItem from "./EmptyBoardItem";
import GameOver from "./GameOver";
import RevealedBoardItem from "./RevealedBoardItem";
enum CardState {
  hidden = "hidden",
  showing = "showing",
  found = "found",
}
export interface Props {
  pokeArr: {
    name: string;
    url: string;
    id: string;
    imageUrl: string;
  }[];
}
const getNewArr = async () => {
  const arr = await GetPokemon();
  const normalizedPoke = separateTypes(arr);
  const readPokeArr = RandomizePokemon(normalizedPoke, 13);
  return readPokeArr;
};
export default function Board({ pokeArr }: Props) {
  const stateArr: CardState[] = [];
  for (let i = 0; i < pokeArr.length; i++) {
    stateArr.push(CardState.hidden);
  }
  const [showCard, setShowCard] = useState<CardState[]>(stateArr);
  const [pokemon, setPokemon] = useState(pokeArr);
  const [selected, setSelected] = useState<{ name: string; id: number }[]>([]);
  const [moves, setMoves] = useState(0);
  const [prev, setPrev] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  const reset = async () => {
    setPrev(moves);
    setMoves(0);

    let newArr = await getNewArr();
    setPokemon(newArr);
    setShowCard((prev) => prev.map((item) => (item = CardState.hidden)));
  };
  const checkGameState = () => {
    const cardsToGo = showCard.filter((c) => c !== CardState.found);

    if (cardsToGo.length === 0) {
      setShowPrompt(true);
    }
  };
  const addScore = () => {
    setShowCard((prev) =>
      prev.map((item, index) => {
        if (index === selected[0]?.id) {
          item = CardState.found;
        }
        if (index === selected[1]?.id) {
          item = CardState.found;
        }
        return item;
      })
    );
  };
  const selectAgain = (e: React.MouseEvent) => {
    if (selected.length === 2) {
      const name = e.currentTarget.children[0].innerHTML;

      const id = parseInt(e.currentTarget.id);
      const obj = {
        name,
        id,
      };

      let choosen: { name: string; id: number };

      if (obj.id === selected[0].id) {
        choosen = selected[0];
      } else if (obj.id === selected[1].id) {
        choosen = selected[1];
      } else {
        return;
      }

      setSelected([choosen]);
      setShowCard((prev) =>
        prev.map((item, index) => {
          if (index === choosen.id) {
            return (item = CardState.showing);
          } else if (item === CardState.found) {
            return item;
          } else {
            item = CardState.hidden;
          }
          return item;
        })
      );
    }
  };
  const revealCard = (e: React.MouseEvent) => {
    const name = e.currentTarget.children[0].innerHTML;
    const id = parseInt(e.currentTarget.id);
    const obj = {
      name,
      id,
    };
    if (selected.length === 1) {
      setMoves((prevState) => prevState + 1);
    }
    if (selected.length === 2) {
      setSelected([obj]);
      setShowCard((prev) =>
        prev.map((item) => {
          if (item === CardState.found) {
            return item;
          }
          return (item = CardState.hidden);
        })
      );
    } else {
      setSelected((prev) => [...prev, obj]);
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

  useEffect(() => {
    if (selected[0]?.name === selected[1]?.name) {
      addScore();
    }
  }, [selected]);
  useEffect(() => {
    checkGameState();
  }, [showCard]);
  return (
    <div className="w-full font-mono ">
      {showPrompt ? (
        <GameOver
          previousMoves={prev}
          handleClick={(e) => {
            reset();
            setShowPrompt(false);
          }}
          moves={moves}
        />
      ) : (
        <></>
      )}
      <div className="flex justify-evenly w-full p-4">
        <h3 className="font-bold text-white text-3xl">Moves: {moves}</h3>
        <h3 className="font-bold text-white text-3xl">Previous: {prev}</h3>
      </div>
      <div className="p-8 grid grid-cols-auto gap-4 w-full justify-items-center">
        {pokemon.map((poke, index) => (
          <div key={index}>
            {showCard[index] === CardState.showing ? (
              <BoardItem
                handleClick={(e) => selectAgain(e)}
                index={index.toString()}
                imageUrl={poke.imageUrl}
                name={poke.name}
              />
            ) : (
              <></>
            )}
            {showCard[index] === CardState.hidden ? (
              <EmptyBoardItem
                handleClick={revealCard}
                index={index.toString()}
                name={poke.name}
              />
            ) : (
              <></>
            )}
            {showCard[index] === CardState.found ? (
              <RevealedBoardItem index={index.toString()} />
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
