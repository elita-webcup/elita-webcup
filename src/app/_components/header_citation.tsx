import React from 'react';
import ActionButton from "@/app/_components/action_button";
import {roboto_mono} from "@/app/_components/font";
import Link from "next/link";
import Image from "next/image";

const HeaderCitation = () => {
    return (

        <div className="w-full flex flex-col justify-start space-y-11 px-[5%]  text-white  ">
            <div className="flex justify-center">
                <div className="flex flex-col space-y-6 justify-start gap-5">
                    <div className="w-full flex">
                        <h4 className="text-md" >
                            🚀 &nbsp; Votre prochaine mission est là.
                        </h4>
                    </div>
                    <h1 className={ roboto_mono.className + " w-[22ch] text-7xl text-wrap"}>
                        Agent, prêt à relever le défi ?  <br/> <span className="text-[#84CC16]"> </span>
                        <span className="text-[#84CC16]">Votre  Mission</span> vous attend...
                    </h1>
                    <ActionButton/>
                </div>
                <Image src="/avatar.gif" alt="gif"  width="750" height="750"/>
            </div>

        </div>
    );
};

export default HeaderCitation;
