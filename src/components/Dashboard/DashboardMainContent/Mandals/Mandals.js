import React, { useEffect, useState } from 'react';
import './Mandals.css';
import Table from '../../../UI/Table/Table';
import Button from '../../../UI/Button/Button';
import {useSelector,useDispatch} from 'react-redux';
import {fetchMandals} from '../../../../redux/actions';
import AddItemHeader from '../AddItemHeader/AddItemHeader';
import {createHeadData } from '../../../../helpers/createTableData';
import {addItemToRealtimeDB,removeItemFromRealtimeDB} from '../../../../helpers/firebasehelper';
import emptyBoxImg from '../../../../assets/images/empty_box.svg';
import Loader2 from '../../../UI/Loader2/Loader2';


export default function Mandals(props){

    const [mandal,setMandal] = useState("");
    const [loading,setLoading] = useState(false)

    const addMandal = (mandal) => {
        setLoading(true);
        addItemToRealtimeDB("mandals",mandal,()=>{ setLoading(false);});
    }

    const removeMandal = (key) => {
        removeItemFromRealtimeDB("mandals/"+key,()=>{ setLoading(false);});
    }

    const state= useSelector(state=>state.mandals);
    const mandals = state.data;
    const isFetching = state.isFetching;

    const dispatch = useDispatch();

    useEffect(()=>{
        if(mandals.length===0)
        dispatch(fetchMandals());
    },[])


    const bodyData = (
        <tbody>
           {
               mandals.map((mandal,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{mandal.value}</td>
                            <td><Button onClick={()=>removeMandal(mandal.key)}>Delete</Button></td>
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
            <p>Fetching Mandals</p>
        </div> 
        }else if(mandals.length === 0){
            content = <div className="section-no-items-present">
            <img src={emptyBoxImg}/>
            <p>No Mandals added</p>
        </div>
        }else{
            content = <Table className="section-pincodes-table"
            tableHeadData={createHeadData(["No.","Mandal","Actions"])}
            tableBodyData={bodyData}
            />
        }
        return content;
    }


    return (
        <div className="section-pincodes">
            <p className="section-pincodes-title">Manage Mandals</p>
            <AddItemHeader
                title="Add Mandal"
                placeholder="Mandal"
                type="text"
                value={mandal}
                onChangeHandler={setMandal}
                addItemHandler={()=>addMandal(mandal)}
                loading={loading}
            />
            <p className="section-pincodes-subtitle">Mandals List</p>
            {getContent()}
        </div>
    )
}