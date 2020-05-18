import React from 'react';
import './Mandals.css';
import Table from '../../../UI/Table/Table';

export default function Mandals(props){
    const bodyData = (
        <tbody>
           {
               props.mandals.map((mandal,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{mandal}</td>
                        </tr>
                    )
               })
           }
        </tbody>
    )

   const  headData = (
       <tr>
           <th>No.</th>
           <th>Gram Mandal</th>
       </tr>
   )

    return (
        <div>
            <h1>This is Mandals</h1>
            <Table 
                tableHeadData={headData}
                tableBodyData={bodyData}
                />
        </div>
    )
}