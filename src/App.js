import { useState } from "react";
import "./App.css";

function App() {
  const[count, setCount]=useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }
  function IncreaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-blue-300 flex justify-center items-center flex-col gap-10">

      <div className="text-2xl py-12"> Increment and Decrement </div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-lg text-[25px] text-[#415b7b]">

        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="text-center text-5xl">
          {count}
        </div>

        <button onClick={IncreaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>

      </div>

      <button onClick={resetHandler} className="text-[red] px-5 py-2 bg-white rounded-sm  ">
        Reset
      </button>
      
    </div>
  );
}

export default App;
