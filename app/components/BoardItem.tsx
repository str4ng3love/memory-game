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
        className="h-16 w-16 rounded-md bg-black p-2 font-mono text-white shadow-md shadow-black transition-all duration-100 ease-linear hover:scale-105 hover:bg-white md:h-32 md:w-32 md:p-4 "
      >
        <span className="hidden">{name}</span>
        <Image
          onDragStart={(e) => {
            e.preventDefault(), console.log(e);
          }}
          priority={true}
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
