"use client";

import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";

export function TypewriterTitle() {
    const words = [
        {
            text: "Welcome,",
        },
        {
            text: "Agent.",
        },
        {
            text: "Your",
            className: "text-[#84CC16] dark:text-[#84CC16]"
        },
        {
            text: "Mission",
            className: "text-[#84CC16] dark:text-[#84CC16]"
        },
        {
            text: "Awaits.",
        },
    ];
    return (
        <TypewriterEffectSmooth words={words} />
    );
}
