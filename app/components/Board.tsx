import RandomizePokemon from "@/hooks/RandomizePokemon";
import BoardItem from "./BoardItem";
export interface Props {
    pokeArr:{
        name:string;
        url:string;
    } []
}

export default function Board({pokeArr}:Props){
    
   
    // const DoublePoke = (arr:typeof pokeArr)=>{
    //     let doubledArr = arr.concat(arr)
    //     return doubledArr
    // }
    // const FYShuffle=(arr:typeof pokeArr)=>{
    //     let oldEl;
    //     for(let i = arr.length -1; i > 0; i--){
    //         let random = Math.floor(Math.random() * (i + 1));
    //         oldEl = arr[i];
    //         arr[i] = arr[random];
    //         arr[random] = oldEl
    //     }
    
        
    
    //     return arr
    // }
    // const randoPokemon = FYShuffle(pokeArr).slice(0,25)
    // const twicePoke = DoublePoke(randoPokemon)
    // const shuffledTwice = FYShuffle(twicePoke)
        const readyPokeArray = RandomizePokemon(pokeArr, 25)
   
    
    return(
        <div className="grid grid-cols-10">
        {readyPokeArray.map((poke, index)=><BoardItem key={index} text={poke.name}/>)}

        </div>
    )
}