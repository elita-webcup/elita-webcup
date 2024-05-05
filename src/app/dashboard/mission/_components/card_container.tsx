"use client"
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {missions} from "@/data/mission";


export function CardContainer() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={missions} />
        </div>
    );
}
