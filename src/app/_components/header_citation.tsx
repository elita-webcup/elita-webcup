import React from 'react';
import ActionButton from "@/app/_components/action_button";
import {roboto_mono} from "@/app/_components/font";

const HeaderCitation = () => {
    return (
        <div className="flex flex-col space-y-6  text-center items-center px-[5%]  text-white ">
            <div className="flex flex-col space-y-6">
                <h4 className="text-md" >
                    🚀 &nbsp; Your Next Mission Begins Here
                </h4>
                <h1 className={ roboto_mono.className + " text-7xl text-wrap"}>
                    Welcome, Agent. <span className="text-[#84CC16]">Your </span> <br/>
                     <span className="text-[#84CC16]"> Mission</span> Awaits.
                </h1>
            </div>
            <ActionButton/>
        </div>
    );
};

export default HeaderCitation;
