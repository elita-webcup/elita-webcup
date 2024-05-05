"use client"

import {roboto_mono} from "@/app/_components/font";
import Link from "next/link";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";

export const menuItems = [
    {content: "HOME", numero: "1", href: "/"},
    {content: "PROFILE", numero: "2", href: "/profile"},
    {content: "DASHBOARD", numero: "3", href: "/dashboard"},
    {content: "MISSION", numero: "4", href: "/dashboard/mission"},
]

export default function FullMenuPage (){

    return (
        <div className="absolute top-0 left-0 right-0 bg-[#0d0d0d] z-50">
            <div className="absolute -z-1 top-16 left-40">
                <h1 className={ roboto_mono.className + " text-gray-700 opacity-35 text-[150px] font-extrabold"}>Menu</h1>
            </div>
            <div className="flex flex-col justify-around items-center ml-[50%] w-40 h-[100vh] pt-40 pb-20">
                <span className={roboto_mono.style +" text-white absolute top-14 right-40 text-xl"}><CloseIcon/></span>
                {
                    menuItems.map((item, i) => (
                        <Link href={item.href} key={i} className=" text-white text-3xl flex flex-row justify-start w-20">
                            <span className={roboto_mono.className + " mr-3 text-lime-500"}>.0{item.numero}</span><span className={"" + roboto_mono.className}>{item.content}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
