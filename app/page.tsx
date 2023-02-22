import { GetPokemon } from "@/services/Pokemon";
import Board from "./components/Board";
import PopRules from "./components/PopRules";





export default async function Home() {
  const pokemons = await GetPokemon()

  const separateTypes = (pokeArr:{name:string, url:string}[])=>{
    const separatedPoke = pokeArr.filter(poke => !poke.name.includes('-'))
    return separatedPoke
  }
  const normalizedPoke = separateTypes(pokemons)

  return (
    <main className="flex flex-col items-center w-full">
      {/* <PopRules />  */}
  <div>
    
  <h2 className="text-[3rem] font-bold py-8 font-mono">Match em All!</h2>
  </div>
   
      <Board pokeArr={normalizedPoke} />


  
    
    </main>
  )
}
