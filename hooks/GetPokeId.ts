

export default async function GetPokeId(url:string){
    const res = await fetch(url, {cache: "force-cache"})
   const poke = await res.json()

   return poke.id
}