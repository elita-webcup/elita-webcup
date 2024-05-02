"use server"
import React from 'react';
import Card from "@/app/_service/card";
import {prisma} from "@/app/_service/test_service";

const Test = async () => {
    // create()
    const users = await prisma.user.findMany()
    return (
        <div>
            {users.map((elem,key)=>(
                <div key={key}>
                    {elem.name}
                </div>
            ))}
        </div>
    )
};

export default Test;