"use client"
import React from 'react';
interface Props{
    allUsers: {id: number, email: string, name: string | null}[]
}

const Card = (props:Props) => {
    return (
        <div>
            {
                props.allUsers.map((elem,key)=>(
                    <div key={key}>
                        {
                            elem.name
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Card;