import React from 'react';
import './Dashboard.css';
import './DashboardSideBar/DashboardSideBarItem/DashboardSideBarItem';
import DashboardSideBarItem from './DashboardSideBar/DashboardSideBarItem/DashboardSideBarItem';
import volunteerImage from '../../assets/images/volunteer.svg';
import dashboardImage from '../../assets/images/dashboard.svg';
import locationImage from '../../assets/images/location.svg';
import beneficiariesImage from '../../assets/images/beneficiaries.svg';


function Dashboard(props){
    return (
    <div className="dashboard-container">
        <div className="dashboard-sidebar">
            <DashboardSideBarItem image={dashboardImage} title="Dashboard" isActive={true}/>
            <DashboardSideBarItem image={volunteerImage} title="Volunteers"/>
            <DashboardSideBarItem image={beneficiariesImage} title="Beneficiaries"/>
            <DashboardSideBarItem image={locationImage} title="Pin Codes"/>
            <DashboardSideBarItem image={locationImage} title="Mandals"/>
            <DashboardSideBarItem image={locationImage} title="Gram Panchayats jhgfjkhg"/>
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