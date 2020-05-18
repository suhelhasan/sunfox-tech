import React from 'react';
import './GramPanchayats.css';
import Table from '../../../UI/Table/Table';

export default function GramPanchayats(props){
    const bodyData = (
        <tbody>
           {
               props.panchayats.map((panchayat,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{panchayat}</td>
                        </tr>
                    )
               })
           }
        </tbody>
    )

   const  headData = (
       <tr>
           <th>No.</th>
           <th>Gram Panchayat</th>
       </tr>
   )

    return (
        <div>
            <h1>This is Gram Panchayats</h1>
            <Table 
                tableHeadData={headData}
                tableBodyData={bodyData}
                />
        </div>
    )
}