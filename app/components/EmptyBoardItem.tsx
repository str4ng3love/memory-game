"use client";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  index: string;
  name: string;
}
export default function EmptyBoardItem({ handleClick, index, name }: Props) {
  return (
    <>
      <div
        id={index}
        onClick={(e) => handleClick(e)}
        className="shadow-md shadow-black p-4 font-mono rounded-md bg-black text-white w-32 h-32 hover:scale-105 transition-all duration-100 ease-linear hover:bg-white "
      >
        <span className="hidden">{name}</span>
      </div>
    </>
  );
}
