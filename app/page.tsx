import Board from "./components/Board";


export default async function Home() {

  return (
    <main className="min-w-[400px] flex flex-col items-center w-full min-h-[100dvh] bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-500">
      <h2 className="md:text-[3rem] text-[2rem] text-white font-bold py-8 font-mono ">
        Match em All!
      </h2>

      <Board />
    </main>
  );
}
