import React from 'react';
import './DashboardMainContent.css';
import DashboardMainContentHeader from './DashboardMainContentHeader/DashboardMainContentHeader';
import DashboardMainContentBody from './DashboardMainContentBody/DashboardMainContentBody';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function DashboardMainContent(props){
    return (
       <div className="dashboard-main-content">
            <DashboardMainContentHeader logoutHandler={props.logoutHandler}/>
            <DashboardMainContentBody />
       </div>
    )
}

export default DashboardMainContent;