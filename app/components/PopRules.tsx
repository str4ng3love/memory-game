"use client";
import { useState } from "react";
export default function PopRules() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <div className="absolute z-10 flex min-h-full min-w-full -translate-y-36 justify-center">
          <div className="right-0 mt-28 flex h-fit w-fit min-w-[400px] flex-col items-center rounded-md bg-black/80 p-4 text-white shadow-lg shadow-black">
            <h2 className="pt-8 text-2xl">The Rules:</h2>
            <div className="flex flex-col p-4 ">
              <ul>
                <li className="p-4">
                  <span className="md:text-lg">
                    1. Click tiles to reveal images.
                  </span>
                </li>
                <li className="p-4">
                  <span className="md:text-lg">
                    2. Try to match images to score.
                  </span>
                </li>
                <li className="p-4">
                  <span className="md:text-lg">
                    3. The less moves you need to match all the images, the
                    better your score.
                  </span>
                </li>
              </ul>
            </div>
            <button
              aria-label="start the game"
              onClick={(e) => {
                setShow(false);
                let body = document.querySelector("body");

                if (body) body.style.overflow = "auto";
              }}
              className="rounded-md bg-gray-800 p-8 text-xl hover:bg-white hover:text-black md:text-2xl"
            >
              PLAY
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
