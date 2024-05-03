"use client"
import React, {useEffect} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const TextScroll = () => {
    useEffect(() => {
        const textWrapper = document.querySelector(".your-text-wrapper-class")
        console.log(textWrapper)
        const pinTrigger = ScrollTrigger.create({
            trigger:".content-wrapper",
            pin:true,
            start:"top top",
            end:"+=200%",
        })

        let tl= gsap.timeline()
        tl.to(textWrapper,{
            x: "-200%",
            scrollTrigger:{
                start: ()=> pinTrigger?.start,
                end:()=> pinTrigger?.end,
                scrub:1,
            }
        })
        return ()=>{
            pinTrigger?.kill()
            tl.kill()
        }
    }, []);
    return (
        <div className="content-wrapper">
            <div className="your-text-wrapper-class flex justify-center items-center h-screen">
                <h1 className="text-[7em] font-bold whitespace-nowrap text-wrapper transform translate-x-[70%] ">
                    A new way of designing ,discovering and sharing
                </h1>
            </div>
        </div>
    );
};

export default TextScroll;