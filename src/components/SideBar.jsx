import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import { GiWorld } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { TiLocationOutline } from "react-icons/ti";
import { BsHouseDoor } from "react-icons/bs";

const SideBar = () => {
  return (
    <>
      <ul className="flex flex-col items-end justify-between relative text-right space-y-5">
        <li className="flex items-center justify-between md:gap-3">
          <div className="flex items-center">
            <p className="hidden md:block font-bold">
              Your Name <br />{" "}
              <span className="lg:text-sm text-xs font-light">
                First, Middle & Last Name
              </span>
            </p>
          </div>
          <NavLink to="/" className="flex items-center gap-14">
            <div className="bg-gray-600 p-3 rounded-full flex items-end icon">
              <HiOutlineUser />
            </div>
            <div className="w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot"></div>
          </NavLink>
        </li>

        <span className="h-[90%] border border-slate-700 border-solid flex-end absolute right-[84px] -z-10"></span>

        <li className="flex items-end justify-between md:gap-3">
          <div className="flex items-center">
            <p className="hidden md:block font-bold">
              City <br /> Location
            </p>
          </div>
          <NavLink to="/2" className="flex items-center justify-between gap-14">
            <div className="bg-gray-600 p-3 rounded-full icon">
              <TiLocationOutline />
            </div>
            <div className="w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot"></div>
          </NavLink>
        </li>

        <li className="flex items-end justify-between md:gap-3">
          <div className="flex items-center">
            <p className="hidden md:block font-bold">
              Telephone <br />
              Number
            </p>
          </div>
          <NavLink to="/3" className="flex items-center justify-between gap-14">
            <div className="bg-gray-600 p-3 rounded-full icon">
              <BiPhoneCall />
            </div>
            <div className="w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot"></div>
          </NavLink>
        </li>

        <li className="flex items-center justify-between md:gap-3">
          <div className="flex items-center">
            <p className="hidden md:block font-bold">
              House <br />
              Address
            </p>
          </div>
          <NavLink to="/4" className="flex items-center justify-between gap-14">
            <div className="bg-gray-600 p-3 rounded-full icon">
              <BsHouseDoor />
            </div>
            <div className="w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 dot"></div>
          </NavLink>
        </li>

        <li className="flex items-center justify-between md:gap-3">
          <div className="flex items-center">
            <p className="hidden md:block font-bold">
              Country Of<br />
              Residence
            </p>
          </div>
          <NavLink to="/5" className="flex items-center justify-between gap-14">
            <div className="bg-gray-600 p-3 rounded-full dot">
              <GiWorld />
            </div>
            <div className="w-1 rounded-full p-1 bg-gray-600 dark:bg-blue-950 border border-solid border-black dark:border-slate-400 icon"></div>
          </NavLink>
        </li>
        <span className="lg:h-[150%] h-[133%] sm:h-[147%] md:h-[143%] border-black dark:border-slate-500 w-px border-l block absolute lg:-top-[104px] -top-[80px] sm:-top-[88px] md:-top-[95px] right-[5px] -z-10"></span>
      </ul>

      <Outlet />
    </>
  );
};

export default SideBar;
