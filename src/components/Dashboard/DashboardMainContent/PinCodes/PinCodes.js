import React from 'react';
import './PinCodes.css';
import Table from '../../../UI/Table/Table';

export default function PinCodes(props){

    const bodyData = (
        <tbody>
           {
               props.pincodes.map((pincode,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{pincode}</td>
                        </tr>
                    )
               })
           }
        </tbody>
    )

   const  headData = (
       <tr>
           <th>No.</th>
           <th>Pin Code</th>
       </tr>
   )

    return (
        <div>
            <h1>This is Pincodes</h1>
            <Table 
                tableHeadData={headData}
                tableBodyData={bodyData}
                />
        </div>
    )
}