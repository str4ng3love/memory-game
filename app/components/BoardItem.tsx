import GetPokeId from "@/hooks/GetPokeId";

import Image from "next/image";


interface Props {
  text: string;
  url: string;
}
export default async function BoardItem({ text, url }: Props) {
  const id = await GetPokeId(url);

  return (
    <div className="p-4  font-mono rounded-md bg-black text-white w-32 h-32 hover:scale-105">
  
        <Image
          title={text}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={text}
          width={100}
          height={100}
        />
   
    </div>
  );
}
