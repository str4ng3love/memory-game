import { GetPokemon } from "@/services/Pokemon";
import Board from "./components/Board";
import PopRules from "./components/PopRules";





export default async function Home() {
  const pokemons = await GetPokemon()
  


  return (
    <main className="flex justify-center items-center h-[100vh] w-[100dvw]">
      <PopRules /> 
      <div className=" flex flex-col">
      <Board pokeArr={pokemons} />
      </div>
  
    </main>
  )
}
