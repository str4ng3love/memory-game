"use client";


interface Props {
  index: string;

}
export default function RevealedBoardItem({
  index,

  
  
}: Props) {
  return (
    <>
      <div
      
        id={index}
        className="p-4 font-mono rounded-md bg-white text-white w-32 h-32 animate-spin-out opacity-0 shadow-md shadow-black"
      >
      
      </div>
    </>
  );
}
