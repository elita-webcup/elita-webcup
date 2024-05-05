import React from 'react'

function page() {
    return (
        <div className='w-full flex justify-center items-center h-screen p-[10%] '>
            <div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-5'>
                <div className=' text-[#b2d5b2] w-72 h-64 p-4 bg-[#041008] shadow-xl shadow-slate-400/20 rounded-xl '>
                    <div>logo</div>
                    <div className='text-4xl uppercase'>Mission</div>
                    <div className='flex  bg-[#041008] justify-baseline space-x-4 mt-2'>
                        <div className='w-1/2 py-5' >
                            <div>Succès : 15 </div>
                            <div>Echèc : 5 </div>
                            <div>En cours : 5 </div>
                        </div>
                        <div className=' flex justify-center items-center text-4xl p-4  '>
                            <div className='w-20 h-20 bg-black p-1 rounded-full '>
                                <div className='w-full h-full bg-[#020202] rounded-full flex justify-center items-center  '>
                                    25
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=' text-[#b2d5b2] w-72 h-64 p-4 bg-[#041008] shadow-xl shadow-slate-400/20 rounded-xl '>
                    <div>logo</div>
                    <div className='text-4xl uppercase'>Agent</div>
                    <div className='flex  bg-[#041008] justify-baseline space-x-4 mt-2'>
                        <div className='w-1/2 py-5' >
                            <div>En mission : 15 </div>
                            <div>Libre : 5 </div>
                            <div>En pause : 5 </div>
                        </div>
                        <div className=' flex justify-center items-center text-4xl p-4  '>
                            <div className='w-20 h-20 bg-black p-1 rounded-full '>
                                <div className='w-full h-full bg-[#020202] rounded-full flex justify-center items-center  '>
                                    25
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
