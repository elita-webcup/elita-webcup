"use client"
import React from 'react'
import { useState } from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { GiSpy } from "react-icons/gi";
import { PiToolboxFill } from "react-icons/pi";
import { usePathname } from 'next/navigation';
import { MdKeyboardArrowLeft } from "react-icons/md";

import Link from 'next/link';

type MenuProps = {
    name: string,
    link: string,
    icon: React.ReactNode,
    active: boolean,
}


function NavBar() {
    const [open, setOpen] = useState(true)
    const path = usePathname()
    const menus = [
        { name: "Dashboard", link: "/admin/dashboard", icon: <MdOutlineDashboard size={21} /> },
        { name: "Missions", link: "/admin/missions", icon: <FaTasks size={21} /> },
        { name: "Agents", link: "/admin/agents", icon: <GiSpy size={21} /> },
        { name: "Equipements", link: "/admin/equipements", icon: <PiToolboxFill size={21} /> },
    ];
    return (
        <div className={`h-[100vh] ${open ? "w-[350px]" : "w-[80px] "} shadow-[#80d391] shadow-sm backdrop-blur-3xl duration-300 ease-in-out bg-[#041008] border-r sticky top-0 border-lime-500/20 flex items-center rounded-tr-full rounded-br-full   `}  >
            <div className=' flex items-center justify-centerbg-white border-2  border-lime-500 bg-[#041008] w-10 h-10 rounded-full absolute -right-5 top-[48%]  text-[#91af8d]'>
                <MdKeyboardArrowLeft onClick={() => setOpen(!open)} size={30} className={`${!open ? "rotate-180" : ""} duration-300 ease-in border-lime-500`} />
            </div>
            <ul className='w-[75%] p-0'>
                {
                    menus.map(menu => {
                        return (
                            <li key={menu.name}>
                                <Menu
                                    link={menu.link}
                                    icon={menu.icon}
                                    name={!open ? "" : menu.name}
                                    active={path?.startsWith(menu.link) ? true : false}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavBar


function Menu({ link, icon, name, active }: MenuProps) {
    return (
        <>
            <Link href={link}>
                <div className={`flex space-x-2 h-10 w-full justify-start mt-3 py-2 text-base px-5 rounded-3xl duration-300 ease-in text-[#91af8d]
            ${active ? "bg-[#0d590e41] text-[#31a220] font-semibold " : " hover:bg-gray-500/20 hover:text-[#31a220] "}
            `}>
                    <div>{icon}</div>
                    <div>{name}</div>
                </div>
            </Link>
        </>

    )
}
