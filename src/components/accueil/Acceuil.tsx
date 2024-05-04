'use client'

import {useTypewriter} from "react-simple-typewriter";
import Image from "next/image";

function Accueil(){
    const [text1] = useTypewriter({
        words: ["Agent"],
        loop: 1,
    })
    const [text2] = useTypewriter({
        words: ["James Bond"],
        loop: 1
    })


    return (
        <>
            <div className={"flex text-white justify-between flex-row w-90 ml-8 mr-8 top-4 rounded-3xl pt-5 h-16 backdrop-blur-xl backdrop-brightness-50 "}>
                <div className={""}>
                    <img src={""} />
                </div>
                <div className={" mr-8"}>
                    <span className={"font-bold"}>James Bond</span>
                </div>
            </div>
            <div className={"flex"}>
                <div className="w-[40%] h-[50%] ml-40 mt-10">
                    <h1 className="text-white text-[80px] font-bold">Bienvenue</h1>
                    <h1 className="text-lime-500 text-[80px] font-bold">{text1}</h1>
                    <h1 className="text-white text-[80px] font-bold">{text2}</h1>
                </div>
                <div className={"inline mt-10"}>
                    <Image
                        src="/avatar.gif"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </>
    )
}

export default Accueil;