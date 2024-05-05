import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ActionButton = () => {
    return (
        <a href="">
           <button className="bg-[#84CC16] text-black flex space-x-2 items-center rounded-full px-3 py-2">
               <span>View my mission</span> <FaArrowRightLong/>
           </button>
        </a>
    );
};

export default ActionButton;