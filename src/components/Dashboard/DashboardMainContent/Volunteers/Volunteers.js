import React from 'react';
import './Volunteers.css';
import Table from '../../../UI/Table/Table';

export default function Volunteers(props){

    const getVolunteersHeadData = ()=>{
        return (
            <tr>
                <th></th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Pin Code</th>
                <th>Actions</th>
            </tr>
        )
    }

    const getVolunteersBodyData = ()=>{
        return (
            <tbody>
                {props.volunteers.map((volunteer,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{volunteer['name']}</td>
                            <td>{volunteer['age']}</td>
                            <td>{volunteer['gender']}</td>
                            <td>{volunteer['designation']}</td>
                            <td>{volunteer['email']}</td>
                            <td>{volunteer['pinCode']}</td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    return (
        <div>
            <h1>This is volunteers</h1>
            <Table
                tableHeadData={getVolunteersHeadData()}
                tableBodyData={getVolunteersBodyData()}
            />
        </div>
    )
}