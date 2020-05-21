import React,{useEffect} from 'react';
import Button from '../../../UI/Button/Button';
import Table from '../../../UI/Table/Table';
import {useSelector,useDispatch} from 'react-redux';
import {fetchBeneficiaries} from '../../../../redux/actions/';

import './Beneficiaries.css';

export default function Beneficiaries(props){

    const beneficiaries = useSelector(state=>state.beneficiaries);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(beneficiaries.length===0)
        dispatch(fetchBeneficiaries());
    },[]);

    const getBeneficiariesHeadData = ()=>{
        return (
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Family Members</th>
                <th>Address</th>
                <th>Pin Code</th>
                <th>Gram Panchayat</th>
                <th>Mandal</th>
                <th>Actions</th>
            </tr>
            </thead>
        )
    }

    const getBeneficiariesBodyData = ()=>{
        return (
            <tbody>
                {beneficiaries.map((beneficiary,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{beneficiary['name']}</td>
                            <td>{beneficiary['phone']}</td>
                            <td>{typeof beneficiary['familyMembers'] !== 'undefined' ? beneficiary['familyMembers'].length: 0}</td>
                            <td>{beneficiary['address']}</td>
                            <td>{beneficiary['pinCode']}</td>
                            <td>{beneficiary['gramPanchayat']}</td>
                            <td>{beneficiary['mandal']}</td>

                            <td>
                                    <Button>View Details</Button>    
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    return (
        <div>
            <h1>This is Beneficiaries</h1>
            <Table
                tableHeadData={getBeneficiariesHeadData()}
                tableBodyData={getBeneficiariesBodyData()}
            />
        </div>
    )
}