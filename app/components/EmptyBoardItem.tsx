"use client";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  index: string;
  name: string;
}
export default function EmptyBoardItem({ handleClick, index, name }: Props) {
  return (
    <>
    <div className="bg-[url('/images/pokeLogo.svg')] bg-no-repeat bg-fixed  bg-center ">
      <div
      
        id={index}
        onClick={(e) => handleClick(e)}
        className=" shadow-md shadow-black  p-2 md:p-4 font-mono rounded-md hover:bg-[url('/images/pokeLogo.svg')] bg-no-repeat bg-contain  bg-center bg-black/80 text-white w-16 h-16 md:w-32 md:h-32 hover:scale-105 transition-all duration-100 ease-linear hover:bg-white "
      >
        <span className="hidden">{name}</span>
      </div>
      </div>
    </>
  );
}
