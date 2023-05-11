import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Name = () => {
  let navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(null)

  function handleInputChange(e){
    const value = e.target.value;
    setInputValue(value);

    if(value.length < 2){
      setInputError("Name must have at least 2 characters")
    } else{
      setInputError(null)
    }
  }

  return (
    <div className="flex flex-col justify-between items-start">
      <div>
        <p className="text-sm">Step 1/5</p>
        <h2 className="font-bold text-lg md:text-xl">
          Lets Start With Your Name
        </h2>
        <p className="text-sm">Please fill the details below</p>
      </div>

      <span className="border border-solid dark:border-slate-500 border-black w-full my-5"></span>

      <form className="flex flex-col items-end w-full">
        <label className="mb-3 w-full">
          Enter your name
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black"
            //minLength={6}
          />
        </label>
        {inputError && <div className="text-red-500 text-xs sm:text-sm md:text-base">{inputError}</div>}
        <button
          className="rounded-xl bg-blue-400 p-2"
          onClick={(e) => {
            e.preventDefault();
            navigate("/2");
          }}
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Name;
