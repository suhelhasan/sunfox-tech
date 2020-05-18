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

    const bodyData = (
        <tbody>
            <tr>
                <td>Hello</td>
                <td>Hi</td>
                <td>Bye</td>
                <td>Hello</td>
                <td>Hi</td>
                <td>Bye</td>
            </tr>
            <tr>
                <td>Hi</td>
                <td>Hello</td>
                <td>Bye</td>
                <td>Hi</td>
                <td>Hello</td>
                <td>Bye</td>
            </tr>
            <tr>
                <td>Hello</td>
                <td>Hi</td>
                <td>Bye</td>
                <td>Hello</td>
                <td>Hi</td>
                <td>Bye</td>
            </tr>
            <tr>
                <td>Hi</td>
                <td>Hello</td>
                <td>Bye</td>
                <td>Hi</td>
                <td>Hello</td>
                <td>Bye</td>
            </tr>
        </tbody>
    )

   const  headData = (
       <tr>
           <th>One</th>
           <th>Two</th>
           <th>Three</th>
           <th>One</th>
           <th>Two</th>
           <th>Three</th>
       </tr>
   )
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
                    <Route path={"/admin/pincodes/"}    component={PinCodes}/>
                    <Route path={"/admin/mandals/"}   component={Mandals}/>
                    <Route path={"/admin/panchayats/"}    component={GramPanchayats}/>
                    </Switch>
        </div>
    )
}