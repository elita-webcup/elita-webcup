"use client"

import {roboto_mono} from "@/app/_components/font";

export default function FullMenuPage (){
    const menuItems = [
        {content: "HOME", numero: "1"},
        {content: "PROFILE", numero: "2"},
        {content: "DASHBOARD", numero: "3"},
        {content: "MISSION", numero: "4"},
    ]

    return (
        <>
            <div className="absolute -z-1 top-16 left-40">
                <h1 className={ roboto_mono.className + " text-gray-700 opacity-35 text-[150px] font-extrabold"}>Menu</h1>
            </div>
            <div className="flex flex-col justify-around items-center ml-[50%] w-40 h-[100vh] pt-40 pb-20">
                <span className={roboto_mono.style +" text-white absolute top-14 right-40 text-xl"}>X</span>
                {
                    menuItems.map((item, i) => (
                        <div key={i} className=" text-white text-3xl flex flex-row justify-start w-20">
                            <span className={roboto_mono.className + " mr-3 text-lime-500"}>.0{item.numero}</span><span className={"" + roboto_mono.className}>{item.content}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}