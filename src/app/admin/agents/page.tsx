import React from 'react'

type Agent = {
    id: number,
    codeAgent: string,
    email: string,
    status: string,
    points: number
}



function page() {
    const agents = [
        { id: 1, codeAgent: "007", email: "james@007.com", status: "en mission", points: 150 },
        { id: 2, codeAgent: "008", email: "arthur@008.com", status: "en mission", points: 120 },
        { id: 3, codeAgent: "001", email: "jhon@001.com", status: "en mission", points: 1050 },
        { id: 4, codeAgent: "002", email: "james@002.com", status: "en pause", points: 100 },
        { id: 5, codeAgent: "003", email: "doe@003.com", status: "en pause", points: 400 },
        { id: 6, codeAgent: "004", email: "eric@004.com", status: "libre", points: 250 },
        { id: 7, codeAgent: "005", email: "bastien@005.com", status: "en mission", points: 750 },
        { id: 8, codeAgent: "006", email: "bob@006.com", status: "en pause", points: 1850 },
        { id: 9, codeAgent: "010", email: "vandamme@010.com", status: "en mission", points: 100 },
        { id: 10, codeAgent: "011", email: "english@011.com", status: "libre", points: 270 },
        { id: 11, codeAgent: "012", email: "carter@012.com", status: "en mission", points: 800 },
    ]
    return (
        <div className='w-full h-screen px-[10%]'>
            <div className='flex flex-wrap justify-between gap-y-2 my-4'>
                <h1 className='text-2xl text-white mt-5'>Les Agents </h1>
                <button className='bg-lime-600 px-4 py-1 rounded-xl text-slate-800'> Récruter </button>
            </div>

            <div className='max-h-[40vh]'>
                <table className='w-full text-left'>
                    <thead className='text-white text-left bg-lime-500/20 '>
                        <tr>
                            <th className='p-4'>Agent</th>
                            <th className='p-4'>Email</th>
                            <th className='p-4'>Statuts</th>
                            <th className='p-4'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            agents.map((agent) => (
                                <CardAgent key={agent.id} {...agent} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default page

function CardAgent({ id, codeAgent, email, status, points }: Agent) {
    return (
        <tr className=' text-white p-2 border-b border-lime-500/30  '>
            <td className='p-4'>{codeAgent}</td>
            <td className='p-4'>{email}</td>
            <td className='p-4'>{status}</td>
            <td className='p-4'>{points}</td>
        </tr>
    )
}
