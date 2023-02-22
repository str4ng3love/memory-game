import RandomizePokemon from "@/hooks/RandomizePokemon";
import { Suspense } from "react";
import BoardItem from "./BoardItem";
import Spinner from "./Spinner";
export interface Props {
  pokeArr: {
    name: string;
    url: string;
  }[];
}

export default function Board({ pokeArr }: Props) {
  const readyPokeArray: typeof pokeArr = RandomizePokemon(pokeArr, 26);

  return (
    

    <div className="p-8 grid grid-cols-auto gap-4 w-full justify-items-center">
            
      {readyPokeArray.map((poke, index) => (
          <Suspense key={index} fallback={<Spinner key={index}/>}>

            {/* @ts-expect-error server component */}
          <BoardItem key={index} text={poke.name} url={poke.url} /> 
          </Suspense>
          ))}
    </div>
        
  );
}
