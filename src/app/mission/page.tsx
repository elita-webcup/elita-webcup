import React from 'react';
import {CardContainer} from "@/app/mission/_components/card_container";
import TitleContainer from "@/app/mission/_components/title_container";


const Page = () => {
    return (
        <div className="bg-black flex flex-col ">
            <TitleContainer/>
            <CardContainer/>
        </div>
    );
};

export default Page;