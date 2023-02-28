"use client";
import Image from "next/image";

interface Props {
  index: string;
  name: string;
  imageUrl: string;
  handleClick?: (e: React.MouseEvent) => void;
}
export default function BoardItem({
  index,
  name,
  imageUrl,
  handleClick,
}: Props) {
  return (
    <>
      <div
        onClick={handleClick}
        id={index}
        className="shadow-md shadow-black p-4 font-mono rounded-md bg-black text-white w-32 h-32 hover:scale-105 transition-all duration-100 ease-linear hover:bg-white "
      >
        <span className="hidden">{name}</span>
        <Image
          title={name}
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
        />
      </div>
    </>
  );
}
