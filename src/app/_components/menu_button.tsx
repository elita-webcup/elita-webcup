import React from 'react';
import { CgMenuRight } from "react-icons/cg";

const MenuButton = () => {
    return (
        <div className="flex justify-between items-center px-12 py-4">
            <h1 className="text-white font-bold">
                . 00
            </h1>
            <div className="flex items-center space-x-2 text-xl  ">
                <CgMenuRight className="text-[#B2FF3C]"/>
                <h2 className="text-[#84CC16] text-opacity-80">
                    Menu
                </h2>
            </div>
        </div>
    );
};

export default MenuButton;