import React, { useEffect,useState } from 'react';
import './GramPanchayats.css';
import Table from '../../../UI/Table/Table';
import Button from '../../../UI/Button/Button';
import {useSelector,useDispatch} from 'react-redux';
import {fetchPanchayats} from '../../../../redux/actions';
import AddItemHeader from '../AddItemHeader/AddItemHeader';
import {createHeadData } from '../../../../helpers/createTableData';
import {addItemToRealtimeDB,removeItemFromRealtimeDB} from '../../../../helpers/firebasehelper';
import emptyBoxImg from '../../../../assets/images/empty_box.svg';
import Loader2 from '../../../UI/Loader2/Loader2';


export default function GramPanchayats(props){

    const [panchayat,setPanchayat] = useState("");
    const [loading,setLoading] = useState(false)

    const addPanchayat = (panchayat) => {
        setLoading(true);
        addItemToRealtimeDB("panchayats",panchayat,()=>{ setLoading(false);});
    }

    const removePanchayat = (key) => {
        removeItemFromRealtimeDB("panchayats/"+key,()=>{ setLoading(false);});
    }

    const state = useSelector(state=>state.panchayats);
    const panchayats = state.data;
    const isFetching = state.isFetching;

    const dispatch = useDispatch();

    useEffect(()=>{
        if(panchayats.length===0)
        dispatch(fetchPanchayats());
    },[])

    const bodyData = (
        <tbody>
           {
               panchayats.map((panchayat,index)=>{
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{panchayat.value}</td>
                            <td><Button onClick={()=>removePanchayat(panchayat.key)}>Delete</Button></td>
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
            <p>Fetching Gram Panchayats</p>
        </div> 
        }else if(panchayats.length === 0){
            content = <div className="section-no-items-present">
            <img src={emptyBoxImg}/>
            <p>No Gram Panchayats added</p>
        </div>
        }else{
            content = <Table className="section-pincodes-table"
            tableHeadData={createHeadData(["No.","Gram Panchayat","Actions"])}
            tableBodyData={bodyData}
            />
        }
        return content;
    }

    return (
        <div className="section-pincodes">
            <p className="section-pincodes-title">Manage Gram Panchayats</p>
            <AddItemHeader
                title="Add Gram Panchayat"
                placeholder="Gram Panchayat"
                type="text"
                value={panchayat}
                onChangeHandler={setPanchayat}
                addItemHandler={()=>addPanchayat(panchayat)}
                loading={loading}
            />
            <p className="section-pincodes-subtitle">Gram Panchayats List</p>
            {getContent()}
        </div>
    )
}