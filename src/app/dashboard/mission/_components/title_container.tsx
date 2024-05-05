"use client"
import React from 'react';
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

const words = [
    {
        text: "Veuillez",
    },
    {
        text: "électionner",
    },
    {
        text: "une mission ",
        className: "text-[#84CC16] dark:text-[#84CC16]"
    },
    {
        text: "pour voir",
        className: "text-[#84CC16] dark:text-[#84CC16]"
    },
    {
        text: "plus de détails.",
    },
];
const TitleContainer = () => {
    return (
        <div className="px-14 text-center text-white">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
};

export default TitleContainer;