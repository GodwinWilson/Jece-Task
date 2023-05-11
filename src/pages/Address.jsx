import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Address = () => {

  let navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(null);

  function handleInputChange(e) {
    const value = e.target.value;
    setInputValue(value);

    if (value.length < 10) {
      setInputError("Address must have at least 10 characters");
    } else {
      setInputError(null);
    }
  }

  return (
    <div className="flex flex-col justify-between items-start">
      <div>
        <p className="text-sm">Step 4/5</p>
        <h2 className="font-bold md:text-xl text-lg">Then, your Address</h2>
        <p className="text-sm">Please fill the details below</p>
      </div>

      <span className="border border-solid dark:border-slate-500 border-black w-full my-5"></span>

      <form className="flex flex-col w-full">
        <label className="mb-3 w-full">
          Enter your Address
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black"
          />
        </label>
        {inputError && (
          <div className="text-red-500 text-xs sm:text-sm md:text-base">
            {inputError}
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="rounded-xl bg-blue-500 p-1 sm:p-2 text-xs sm:text-sm md:text-base "
            onClick={(e) => {
              e.preventDefault();
              navigate("/3");
            }}
          >
            Previous Step
          </button>
          <button
            className="rounded-xl bg-blue-400 p-1 sm:p-2 text-xs sm:text-sm md:text-base"
            onClick={(e) => {
              e.preventDefault();
              navigate("/5");
            }}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Address;
