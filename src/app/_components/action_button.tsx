import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const ActionButton = () => {
    return (
        <Link  className=" group" href="/mission">
           <button className="bg-[#84CC16] text-black flex space-x-2  rounded-full px-6 py-3">
               <span>View my mission</span>
               <div className=" flex relative h-fit overflow-hidden">
                   <span className="text-sm  group-hover:-translate-x-5 transition-transform  ease-in-out duration-500"> <FaArrowRightLong/></span>
                   <span className="text-sm  text-primary absolute inset-0 group-hover:translate-x-0 translate-x-5 transition-all duration-500 ease-in-out">  <FaArrowRightLong/> </span>
               </div>
           </button>
        </Link>
    );
};

export default ActionButton;
