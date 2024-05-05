import React from 'react'
import { missions } from '@/data/mission'
import Link from 'next/link'

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
        <div className='w-full  h-screen px-[10%]'>
            <div className='flex flex-wrap justify-between gap-y-2 my-4'>
                <h1 className='text-2xl text-white mt-5'>Les Missions </h1>
                <button className='bg-lime-600 px-4 py-1 rounded-xl text-slate-800'> Ajouter </button>
            </div>
            <div className='max-h-[80vh] overflow-auto mt-4'>
                {
                    missions.map((mission) => (
                        <CardMission key={mission.id} {...mission} />
                    ))
                }
            </div>

        </div>
    )
}

export default page

function CardMission({ id, designation, description, objectif, dateStart, status, risque, cost, ressource }: Mission) {
    return (
        <div className='text-white  p-2 border-lime-500/10 border my-4 '>
            <div className='flex justify-between items-center mb-3 '>
                <div className='text-lime-600'>{designation}</div>
                <div >
                    {
                        status == "Planifiée" && <span className=' bg-blue-300/50 rounded-2xl px-3 py-1  text-sm text-blue-800' >{status}</span>
                    }
                    {
                        status == "Terminée" && <span className='bg-green-300/50 rounded-2xl px-3 py-1 text-sm text-green-800' >{status}</span>
                    }
                    {
                        status == "En cours" && <span className='bg-yellow-300/50 rounded-2xl text-sm px-3 py-1 text-yellow-500' >{status}</span>
                    }
                </div>

            </div>

            <div>{objectif}</div>
            <div>{dateStart}</div>
            <div className='text-xl '>{cost}</div>

            <Link href={`/admin/missions/detail/${id}`}>
                <button className='bg-lime-100/50 shadow shadow-white px-4 py-1 rounded-xl text-slate-800 my-2 hover:scale-105 duration-300 ease-in-out'> Voir détails + </button>
            </Link>

        </div>
    )
}
