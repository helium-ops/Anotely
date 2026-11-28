import React, { useState, useEffect } from "react";
import { Pause, Play, Timer } from "lucide-react";

const FocusSession = ({ sesh }) => {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(25 * 60);
const [isRunning, setIsRunning] = useState(false);

useEffect(() => {
  if (!isRunning || seconds <= 0) return;

  const interval = setInterval(() => {
    setSeconds(prev => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [isRunning, seconds]);
  return (
    <main className="h-[91%] lg:h-[80%] min-h-0 w-full flex justify-start items-center flex-col gap-13 md:flex-1 min-w-0 pt-8 pl-8 px-3 overflow-y-auto fixed bottom-2 right-2 z-[999] lg:-mr-55 lg:mb-10">
      <header className="w-full flex justify-start items-start flex-col gap-1.5">
        <h1 className="text-2xl md:text-3xl font-extrabold">{sesh.name}</h1>
        <h3 className="text-md font-semibold text-gray-500">
          Look at your session
        </h3>
      </header>
      <article className="flex justify-start items-center flex-col h-70 gap-10 w-85 bg-gray-100 dark:bg-gray-800 rounded-4xl p-6 lg:mr-70">
        <header className="flex justify-start items-center gap-1 w-full">
          <Timer size={30} />
          <h1 className="font-bold text-xl">Focus session</h1>
        </header>
        <main className="flex justify-center itmes-center flex-col gap-1">
          <button className="bg-blue-700/20  dark:bg-blue-300/20 font-semibold flex justify-center items-center gap-1 bg-blue-700/20 px-5 py-1.5 text-black rounded-full">
            Timer:{" "}
            <select
            value={time}
  onChange={(e) => setTime(Number(e.target.value))}

              className=" w-full  bg-transparent  text-black  rounded-lg outline-none
    
    "
              name=""
              id=""
            >
              <option value={20} >20 mins</option>
              <option value={25} >25 mins</option>
              <option value={40} >40 mins</option>
              <option value={30} >30 mins</option>
              <option value={50} >50 mins</option>
              <option value={60} >1 hr</option>
            </select>
          </button>
          <p className="w-full text-center font-bold text-4xl mt-3">{String(Math.floor(seconds / 60)).padStart(2, "0")}:
  {String(seconds % 60).padStart(2, "0")}
</p>
          <button className="w-[70%] flex justify-center items-center gap-1 px-1 py-2 bg-blue-600 dark:bg-blue-500 font-semibold rounded-full ml-6 mt-3 text-white"
          onClick={()=>setIsRunning(prev => prev === false ? true : false)}>
           {isRunning === false ? (<><Play size={20} />
            Start </>) : (<><Pause size={20} />
            Pause</>)}
          </button>
        </main>
      </article>
    </main>
  );
};

export default FocusSession;
