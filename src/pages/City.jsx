import React from 'react'
import { useNavigate } from 'react-router-dom';


const City = () => {
  let navigate = useNavigate()
  return (
    <div className="flex flex-col justify-between items-start">
      <div>
        <p className="text-sm">Step 2/5</p>
        <h2 className="font-bold md:text-xl text-lg">
          Next, Where do you Stay
        </h2>
        <p className="text-sm">Please fill the details below</p>
      </div>

      <span className="border border-solid border-black dark:border-slate-500 w-full my-5"></span>

      <form className="flex flex-col w-full">
        <label className="mb-3 w-full">
          Enter your location
          <input
            type="text"
            className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black"
          />
        </label>
        <div className="flex items-center justify-between">
          <button
            className="rounded-xl bg-blue-500 p-1 sm:p-2 text-xs sm:text-sm md:text-base"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Previous Step
          </button>
          <button
            className="rounded-xl bg-blue-400 p-1 sm:p-2 text-xs sm:text-sm md:text-base"
            onClick={(e) => {
              e.preventDefault();
              navigate("/3");
            }}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default City