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
        className="md:p-4 p-2 font-mono rounded-md bg-white text-white h-16 w-16 md:w-32 md:h-32 animate-spin-out opacity-0 shadow-md shadow-black"
      >
      
      </div>
    </>
  );
}
