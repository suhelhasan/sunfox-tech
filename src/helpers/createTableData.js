import React from 'react';

export const createHeadData= (data) => {
    return (
        <thead>
            <tr>
                {
                    data.map((item)=>{
                    return <th>{item}</th>
                    })
                }
            </tr>
        </thead>
    )
}