import React from 'react'
import { missions } from '@/data/mission'
function page({ params }: { params: { id: string } }) {
    const i = parseInt(params.id) - 1
    const mission = missions[i]

    return (
        <div className='text-white flex w-full h-full justify-center items-center'>
            <div className='p-4  bg-[#041008] shadow-slate-400/70 shadow-lg'>
                <div className='text-lime-600 text-2xl' >{mission.designation}</div>
                <div>{mission.description}</div>
                <div>{mission.objectif}</div>

                <span className='underlines'>Information:</span>
                <div>{mission.ressource}</div>
                <div>{mission.risque}</div>
                <div>{mission.dateStart}</div>
                <div >
                    {
                        mission.status == "Planifiée" && <span className=' bg-blue-300/50 rounded-2xl px-3 py  text-sm text-blue-800' >{mission.status}</span>
                    }
                    {
                        mission.status == "Terminée" && <span className='bg-green-300/50 rounded-2xl px-3 py text-sm text-green-800' >{mission.status}</span>
                    }
                    {
                        mission.status == "En cours" && <span className='bg-yellow-300/50 rounded-2xl text-sm px-3 py text-yellow-500' >{mission.status}</span>
                    }
                </div>
            </div>

        </div>
    )
}

export default page
