"use client";

interface Props {
  index: string;
}
export default function RevealedBoardItem({ index }: Props) {
  return (
    <>
      <div
        id={index}
        className="h-16 w-16 animate-spin-out rounded-md bg-white p-2 font-mono text-white opacity-0 shadow-md shadow-black md:h-32 md:w-32 md:p-4"
      ></div>
    </>
  );
}
