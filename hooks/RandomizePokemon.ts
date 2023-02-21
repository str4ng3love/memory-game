

export default function RandomizePokemon(pokeArray: object[], amount:number) {
    const randomPokes = FYShuffle(pokeArray).slice(0, amount)
    const pairArr = DoubleArray(randomPokes)
    const shuffledArrWithPairs = FYShuffle(pairArr)
    return shuffledArrWithPairs
}
export const FYShuffle = (arr: object[]) => {
  let oldEl;
  for (let i = arr.length - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    oldEl = arr[i];
    arr[i] = arr[random];
    arr[random] = oldEl;
  }

  return arr;
};
export const DoubleArray = (arr: object[]) => {
  let doubledArr = arr.concat(arr);
  return doubledArr;
};
