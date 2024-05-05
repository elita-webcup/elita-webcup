'use client'
import React from 'react';
import { CgMenuRight } from "react-icons/cg";
import FullMenuPage from "@/components/accueil/full_menu";
import {roboto_mono} from "@/app/_components/font";
import { MdClose } from "react-icons/md";

const MenuButton = () => {
    const [open, setOpen] = React.useState(false);
    const closeMenuPage = () => {
        setOpen(false);
    }
    // @ts-ignore
    return (
        <div>
            {open?
                <>
                    <FullMenuPage onCloseMenuPage={closeMenuPage} />
                </> : ''
            }
            <div className="flex justify-between items-center px-12 py-4">
                <h1 className="text-white text-4xl font-bold">
                    .00
                </h1>
                <div className="flex justify-center gap-8 items-center">
                    <div id="ecoindex-badge"></div>
                    <div className="flex items-center space-x-2 text-xl cursor-pointer  " onClick={()=>{setOpen(true)}}>
                        <CgMenuRight className="text-[#B2FF3C]"/>
                        <h2 className="text-[#84CC16] text-opacity-80">
                            Menu
                        </h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MenuButton;
