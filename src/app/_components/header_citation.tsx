import React from 'react';
import ActionButton from "@/app/_components/action_button";
import {roboto_mono} from "@/app/_components/font";
import Link from "next/link";
import Image from "next/image";

const HeaderCitation = () => {
    return (
        <div className="flex flex-col space-y-11 px-[5%]  text-white ">
            <div className="flex flex-col space-y-6">
                <div className="w-full flex  gap-2">
                    <h4 className="text-md" >
                        🚀 &nbsp; Your Next Mission Begins Here
                    </h4>
                </div>
                <h1 className={ roboto_mono.className + " w-[25ch] text-7xl text-wrap"}>
                    Agent, prêt à relever le défi ?  <br/> <span className="text-[#84CC16]"> </span>
                     <span className="text-[#84CC16]">Votre  Mission</span> vous attend..
                </h1>
            </div>
            <ActionButton/>
        </div>
    );
};

export default HeaderCitation;
