import React from 'react';
import './Dashboard.css';
import './DashboardSideBar/DashboardSideBarItem/DashboardSideBarItem';
import DashboardSideBarItem from './DashboardSideBar/DashboardSideBarItem/DashboardSideBarItem';

function Dashboard(props){
    return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar">
            <DashboardSideBarItem image="" title="Dashboard" isActive={true}/>
            <DashboardSideBarItem title="Volunteers"/>
            <DashboardSideBarItem title="Beneficiaries"/>
            <DashboardSideBarItem title="Pin Codes"/>
            <DashboardSideBarItem title="Mandals"/>
            <DashboardSideBarItem title="Gram Panchayats jhgfjkhg"/>
        </div>
        <div className="dashboard-main-content">

        </div >
        {/* <h1>This is dashboard</h1>
        <button onClick={props.onLogoutClickHandler}>Logout</button>
     */}
    </div>
    );
}

export default Dashboard;