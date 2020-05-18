import React from 'react';
import './DashboardMainContentBody.css';
import Table from '../../../UI/Table/Table';
import Loader from '../../../UI/Loader/Loader'
import Home from '../Home/Home';
import Volunteers from '../Volunteers/Volunteers';
import GramPanchayats from '../GramPanchayats/GramPanchayats';
import PinCodes from '../PinCodes/PinCodes';
import Mandals from '../Mandals/Mandals';
import Beneficiaries from '../Beneficiaries/Beneficiaries';
import {  Route, Switch } from 'react-router';

export default function DashboardMainContentBody(props){

    const heads=["One","Two","three"];
    return (
    
        <div className="dashboard-main-content-body">
                {/* <Table
                    tableBodyData={bodyData}
                    tableHeadData={headData}
                /> */}
                    <Switch>
                    <Route path={"/admin/"} exact  component={Home}/>
                    <Route path={"/admin/volunteers/"} exact   render={()=>{
                        return (
                            <Volunteers {...props} volunteers={props.volunteers}/>
                        )
                    }}/>
                    <Route path={"/admin/beneficiaries/"}    exact strict component={Beneficiaries}/>
                   
                    <Route path={"/admin/pincodes/"}    render={()=>{
                        return (
                            <PinCodes {...props} pincodes={props.pincodes}/>
                         )
                    }}/>

                    <Route path={"/admin/mandals/"}   render={()=>{
                        return (
                            <Mandals {...props} mandals={props.mandals}/>
                        )
                    }}/>

                    <Route path={"/admin/panchayats/"}    render={()=>{
                        return (
                            <GramPanchayats {...props} panchayats={props.panchayats}/>
                        )
                    }}/>
                    </Switch>
        </div>
    )
}