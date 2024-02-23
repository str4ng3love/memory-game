import { url } from "inspector";
import { json } from "stream/consumers";

export async function GetPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=-1", {
    cache: "force-cache",
  });
  const pokemon = await res.json();
  for (let i = 0; i < pokemon.results.length; i++) {
    let id = pokemon.results[i].url.slice(34).replace("/", "");
    let imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    Object.assign(
      pokemon.results[i],
      {
        id: id,
      },
      { imageUrl },
    );
  }
  return pokemon.results;
}
