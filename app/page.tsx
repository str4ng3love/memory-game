import { GetPokemon} from "@/services/Pokemon";
import RandomizePokemon, { separateTypes } from "@/utils/Pokemon";
import Board from "./components/Board";
import PopRules from "./components/PopRules";





export default async function Home() {
  const pokemons = await GetPokemon()
  const normalizedPoke = separateTypes(pokemons)
  const readyPokeArray = RandomizePokemon(normalizedPoke, 26)


  return (
    <main className="flex flex-col items-center w-full min-h-[100dvh] bg-gradient-to-b  from-orange-800 to-slate-800">
      {/* <PopRules />  */}
  <div className="">
    
  <h2 className="text-[3rem] text-white font-bold py-8 font-mono ">Match em All!</h2>
  </div>
   
      <Board pokeArr={readyPokeArray} />


  
    
    </main>
  )
}
