"use client";
import { useEffect, useState } from "react";
export default function PopRules() {
  const [show, setShow] = useState(true);

    // useEffect(()=>{
    //   let body =  document.querySelector('body')
   
    //   if(body)
    //   body.style.overflow='hidden'
    // }, [])

  return (
    <>
      {show ? (
        <div className="absolute -translate-y-36 min-w-full min-h-full flex justify-center">
          <div className="flex flex-col mt-28 bg-black/80 h-fit p-4 rounded-md text-white min-w-[400px] w-fit items-center right-0 shadow-black shadow-lg">
            <button
              onClick={(e) => {setShow(false);
                let body =  document.querySelector('body')
  
                if(body)
                body.style.overflow='auto'}}
              className="p-8 bg-black rounded-md md:text-2xl text-xl hover:bg-white hover:text-black"
            >
              PLAY
            </button>
            <h2 className="text-2xl pt-8">Them Rules:</h2>
            <div className="p-4 flex flex-col ">
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
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
