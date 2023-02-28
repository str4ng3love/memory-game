

export default function RandomizePokemon(pokeArray: {name:string, url:string, id:string, imageUrl:string}[], amount:number) {
    const randomPokes = FYShuffle(pokeArray).slice(0, amount)
    const pairArr = DoubleArray(randomPokes)
    const shuffledArrWithPairs = FYShuffle(pairArr)
    return shuffledArrWithPairs
}
export const FYShuffle = (arr: {name:string, url:string, id:string , imageUrl:string}[]) => {
  let oldEl;
  for (let i = arr.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    oldEl = arr[i];
    arr[i] = arr[random];
    arr[random] = oldEl;
  }

  return arr;
};
export const DoubleArray = (arr: {name:string, url:string, id:string, imageUrl:string}[]) => {
  let doubledArr = arr.concat(arr);
  return doubledArr;
};
export const separateTypes = (pokeArr:{name:string, url:string,id:string, imageUrl:string}[])=>{
  const separatedPoke = pokeArr.filter(poke => !poke.name.includes('-'))
  return separatedPoke
}