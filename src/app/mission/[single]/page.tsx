import {missions} from "@/data/mission";
import {GlobeDemo} from "@/app/mission/[single]/_components/globe";
import {roboto_mono} from "@/app/_components/font";
import {TypewriterMission} from "@/components/ui/typewriter-mission";





export default function Page({params}:{params:{single:string}}) {
    const mission = missions[parseInt(params.single)-1]
    const costWords = [
        {
            text: "Votre récompense :",
        },
        {
            text: "riches",
            className: "text-[#84CC16] dark:text-[#84CC16]"
        },
        {
            text: "et",
        },
        {
            text: "inestimables",
        },
        {
            text: "trésors",
        },
        {
            text: "dans",
        },
        {
            text: "le coeur",
        },
        {
            text: "de la",
        },
        {
            text: "victoire.",
        },{
            text:"4.000.000Ar",
            className: "text-[#84CC16] dark:text-[#84CC16]"
        }
    ];
    return (
        <div className={ roboto_mono.className + "bg-black  text-white"}>
            <GlobeDemo description={`${mission.description} ${mission.ressource}`} title={mission.designation}/>
            <p className="text-center text-xl p-4 bg-black">
                Dans les recoins les plus sombres du monde, une menace sinistre se cache, prête à déstabiliser l&apos;ordre mondial. Votre mission, si vous choisissez de l&apos;accepter, consiste à infiltrer ses rangs, à découvrir ses plans maléfiques et à les contrecarrer avant qu&apos;il ne soit trop tard. Le sort du monde repose entre vos mains. Êtes-vous prêt à relever le défi ?
            </p>
            <p className="text-center text-xl p-4 bg-black">
                Affrontez l&apos;ombre avec <span className="text-[#84CC16] dark:text-[#84CC16]">courage</span> et <span className="text-[#84CC16] dark:text-[#84CC16]">discernement</span> pour accomplir la mission n&apos;attend que vous.
            </p>
            <TypewriterMission words={costWords} className="text-wrap p-4 bg-black"/>
        </div>
    )

}