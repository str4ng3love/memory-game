import Board from "./components/Board";

export default async function Home() {
  return (
    <main className="flex min-h-[100dvh] w-full min-w-[400px] flex-col items-center bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-500">
      <h2 className="py-8 font-mono text-[2rem] font-bold text-white md:text-[3rem] ">
        Match em All!
      </h2>

      <Board />
    </main>
  );
}
