import React from 'react';
import ActionButton from "@/app/_components/action_button";

const HeaderCitation = () => {
    return (
        <div className="flex flex-col space-y-6 justify-center text-center items-center px-[5%]  text-white ">
            <div className="flex flex-col space-y-4">
                <h4 className="text-xl" >
                    🚀 &nbsp; Your Next Mission Begins Here
                </h4>
                <h1 className="text-[7ch] text-wrap titre">
                    Welcome, Agent. <span className="text-[#84CC16]">Your </span> <br/>
                     <span className="text-[#84CC16]"> Mission</span> Awaits.
                </h1>
            </div>
            <ActionButton/>
        </div>
    );
};

export default HeaderCitation;