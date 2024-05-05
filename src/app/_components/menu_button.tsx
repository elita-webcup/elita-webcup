import React from 'react';
import { CgMenuRight } from "react-icons/cg";
import FullMenuPage from "@/components/accueil/full_menu";

const MenuButton = () => {
    return (
        <div>
            <FullMenuPage />
            <div className="flex justify-between items-center px-12 py-4">
                <h1 className="text-white text-2xl font-bold">
                    .00
                </h1>
                <div className="flex items-center space-x-2 text-xl  ">
                    <CgMenuRight className="text-[#B2FF3C]"/>
                    <h2 className="text-[#84CC16] text-opacity-80">
                        Menu
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default MenuButton;
