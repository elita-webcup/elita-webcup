import {missions} from "@/data/mission";

export default function Page({params}:{params:{single:string}}) {
    const mission = missions[parseInt(params.single)-1]
    return (
        <div className="bg-black h-screen text-white">
            {
                mission.designation
            }
        </div>
    )

}