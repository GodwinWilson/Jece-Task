import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tel = () => {
    const [phone, setPhone] = useState("")

    let navigate = useNavigate()
    // const numberHandler = val => {
    //   const validatedValue = val.replace(/[^0-9]/g, "");
    //   setPhone(validatedValue)
    // }
    const handlePhoneChange = (event) => {
      const regex = /^[0-9()+]*$/; // regular expression to validate input
      const inputValue = event.target.value;

      if (regex.test(inputValue)) {
        setPhone(inputValue);
      }
    };


  return (
    <div className="flex flex-col justify-between items-start">
      <div>
        <p className="text-sm">Step 3/5</p>
        <h2 className="font-extrabold sm:font-bold md:text-xl sm:text-lg text-md">
          Next, Input your Telephone Number
        </h2>
        <p className="text-sm">Please fill the details below</p>
      </div>

      <span className="border border-solid border-black dark:border-slate-500 w-full my-5"></span>

      <form className="flex flex-col w-full">
        <label className="mb-3 w-full">
          Enter your Telephone Number
          <input
            type="tel"
            value={phone}
            className="focus:outline-none border-blue-500 border-solid border-2 w-full rounded-xl md:py-4 py-2 text-black"
            pattern="[+]{1}[0-9]{10, 18}"
            onChange={handlePhoneChange}
          />
        </label>

        <div className="flex items-center justify-between">
          <button
            className="rounded-xl bg-blue-500 p-1 sm:p-2 text-xs sm:text-sm md:text-base"
            onClick={(e) => {
              e.preventDefault();
              navigate("/2");
            }}
          >
            Previous Step
          </button>
          <button
            className="rounded-xl bg-blue-400 p-1 sm:p-2 text-xs sm:text-sm md:text-base"
            onClick={(e) => {
              e.preventDefault();
              navigate("/4");
            }}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tel;
