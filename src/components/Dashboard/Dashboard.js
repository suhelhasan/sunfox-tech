import React,{Component} from 'react';
import './Dashboard.css';
import { Redirect } from "react-router";
import {useSelector} from 'react-redux';
import DashboardSideBar from './DashboardSideBar/DashboardSideBar';
import DashboardMainContent from './DashboardMainContent/DashboardMainContent';

export default function Dashboard (props){

    const authState = useSelector(state=>state.auth);
    const user = authState.user;

   return(
     user===null?
      <Redirect to="/login"/>:
        <div className="dashboard-container">
           <DashboardSideBar />
           <DashboardMainContent
                 logoutHandler={props.logoutHandler}
            />
        </div>    
   )
}

