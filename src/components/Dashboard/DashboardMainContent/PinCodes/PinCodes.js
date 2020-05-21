import React, { useEffect,useState } from 'react';
import './PinCodes.css';
import Table from '../../../UI/Table/Table';
import emptyBoxImg from '../../../../assets/images/empty_box.svg';
import Button from '../../../UI/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPincodes} from '../../../../redux/actions';
import Loader2 from '../../../UI/Loader2/Loader2';
import {createHeadData } from '../../../../helpers/createTableData';
import {addItemToRealtimeDB,removeItemFromRealtimeDB} from '../../../../helpers/firebasehelper';
import AddItemHeader from '../AddItemHeader/AddItemHeader';

export default function PinCodes(props){
    
    const [pinCode, setPinCode] = useState("")
    const [loading,setLoading] = useState(false)
    
    const addPincode = (pinCode) => {
        setLoading(true);
        addItemToRealtimeDB("pincodes",pinCode,()=>{ setLoading(false);});
    }

    const removePincode = (key) => {
        removeItemFromRealtimeDB("pincodes/"+key,()=>{ setLoading(false);});
    }

    const state = useSelector(state=>state.pincodes);
    const pincodes = state.data;
    const isFetching = state.isFetching;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(pincodes.length===0)
        dispatch(fetchPincodes());
    },[]);


    const bodyData = (
        <tbody>
           {       pincodes.map((pincode,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{pincode.value}</td>
                            <td><Button onClick={()=>removePincode(pincode.key)}>Delete</Button></td>
                        </tr>
                    )
               })
           }
        </tbody>
    )

    const getContent = ()=>{
        let content = "";
        if(isFetching){
            content =  <div className="section-no-items-present">
            <Loader2 size={40}/>
            <p>Fetching Pincodes</p>
        </div> 
        }else if(pincodes.length === 0){
            content = <div className="section-no-items-present">
            <img src={emptyBoxImg}/>
            <p>No Pincodes added</p>
        </div>
        }else{
            content = <Table className="section-pincodes-table"
            tableHeadData={createHeadData(["No.","Pin Codes","Actions"])}
            tableBodyData={bodyData}
            /> 
        }
        return content;
    }

    return (
        
        
        <div className="section-pincodes">
            <p className="section-pincodes-title">Manage Pincodes</p>
            <AddItemHeader
                title="Add Pin Code"
                placeholder="Pin Code"
                type="number"
                value={pinCode}
                onChangeHandler={setPinCode}
                addItemHandler={()=>addPincode(pinCode)}
                loading={loading}
            />
            <p className="section-pincodes-subtitle">Pincodes List</p>
            {getContent()}
        </div>
    )
}