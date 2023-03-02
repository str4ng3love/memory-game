"use client";
import { useEffect, useState } from "react";
export default function PopRules() {
  const [show, setShow] = useState(true);

    useEffect(()=>{
      let body =  document.querySelector('body')
   
      if(body)
      body.style.overflow='hidden'
    }, [])

  return (
    <>
      {show ? (
        <div className="absolute backdrop-blur-md w-[100%] h-[100dvh] flex items-center justify-center font-mono">
          <div className=" flex flex-col bg-black/80 p-4 rounded-md text-white min-w-[500px] items-center  shadow-black shadow-lg">
            <h2 className="text-2xl">Them Rules:</h2>
            <div className="p-4 flex flex-col ">
              <ul>
                <li className="p-4">
                  <span className="text-lg">
                    1. Click tiles to reveal images.
                  </span>
                </li>
                <li className="p-4">
                  <span className="text-lg">
                    2. Try to match images to score.
                  </span>
                </li>
                <li className="p-4">
                  <span className="text-lg">
                    3. The less moves you need to match all the images, the
                    better your score.
                  </span>
                </li>
              </ul>
            </div>
            <button
              onClick={(e) => {setShow(false);
                let body =  document.querySelector('body')
  
                if(body)
                body.style.overflow='auto'}}
              className="p-8 bg-black rounded-md text-2xl hover:bg-white hover:text-black"
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
