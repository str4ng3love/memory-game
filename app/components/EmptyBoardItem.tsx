"use client";
import Image from "next/image";
interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  index: string;
  name: string;
  imageUrl: string;
}
export default function EmptyBoardItem({
  imageUrl,
  handleClick,
  index,
  name,
}: Props) {
  return (
    <>
      <div className="bg-[url('/images/pokeLogo.svg')] bg-fixed bg-center  bg-no-repeat ">
        <div
          id={index}
          onClick={(e) => handleClick(e)}
          className=" h-16 w-16  rounded-md bg-black/80 bg-contain bg-center bg-no-repeat p-2 font-mono  text-white shadow-md shadow-black transition-all duration-100 ease-linear hover:scale-105 hover:bg-white hover:bg-[url('/images/pokeLogo.svg')] md:h-32 md:w-32 md:p-4 "
        >
          <span className="hidden">{name}</span>
          <Image
            className="hidden opacity-0"
            priority={true}
            src={imageUrl}
            alt={name}
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
