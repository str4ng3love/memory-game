

export async function GetPokemon(){
   const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1', {cache: "force-cache"})
   const pokemon = await res.json()
   return pokemon.results
}