import React,{useEffect} from 'react';
import './Volunteers.css';
import Table from '../../../UI/Table/Table';
import {useSelector,useDispatch} from 'react-redux';
import {fetchVolunteers} from '../../../../redux/actions';
import Button from '../../../UI/Button/Button';

export default function Volunteers(props){

    const volunteers = useSelector(state=>state.volunteers);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(volunteers.length===0)
        dispatch(fetchVolunteers());
    },[]);

    const getVolunteersHeadData = ()=>{
        return (
            <thead>
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
            </thead>
        )
    }

    const getVolunteersBodyData = ()=>{
        return (
            <tbody>
                {volunteers.map((volunteer,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{volunteer['name']}</td>
                            <td>{volunteer['age']}</td>
                            <td>{volunteer['gender']}</td>
                            <td>{volunteer['designation']}</td>
                            <td>{volunteer['email']}</td>
                            <td>{volunteer['pinCode']}</td>
                            <td>
                                <div class="table-data-buttons-cell">
                                    <Button>View Details</Button>
                                    <Button>Assign Task</Button>
                                </div>                           
                            </td>
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