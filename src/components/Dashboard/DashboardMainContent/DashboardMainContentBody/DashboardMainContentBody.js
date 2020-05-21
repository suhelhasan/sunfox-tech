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

    return (
        <div className="dashboard-main-content-body">
                    <Switch>
                        <Route path={"/admin/"} exact  component={Home}/>
                        <Route path={"/admin/volunteers/"} exact  component={Volunteers}/>
                        <Route path={"/admin/beneficiaries/"} exact  component={Beneficiaries}/>                   
                        <Route path={"/admin/pincodes/"} component={PinCodes}/>
                        <Route path={"/admin/mandals/"} component={Mandals}/>
                        <Route path={"/admin/panchayats/"} component={GramPanchayats}/>
                    </Switch>
        </div>
    )
}