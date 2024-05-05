import React from 'react'
import { missions } from '@/data/mission'

type Mission = {
    id: number,
    designation: string,
    description: string,
    objectif: string,
    dateStart: string,
    status: string,
    risque: string,
    cost: string,
    ressource: string,

}


function page() {
    return (
        <div className='w-full str flex justify-center items-cente h-screen p-[10%]'>
            {
                missions.map((mission) => (
                    <CardMission key={mission.id} {...mission} />
                ))
            }
        </div>
    )
}

export default page

function CardMission({ id, designation, description, objectif, dateStart, status, risque, cost, ressource }: Mission) {
    return (
        <div className=''>

        </div>
    )
}
