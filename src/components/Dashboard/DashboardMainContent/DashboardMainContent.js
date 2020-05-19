import React from 'react';
import './DashboardMainContent.css';
import DashboardMainContentHeader from './DashboardMainContentHeader/DashboardMainContentHeader';
import DashboardMainContentBody from './DashboardMainContentBody/DashboardMainContentBody';

function DashboardMainContent(props) {
    return (
        <div className="dashboard-main-content">
            <DashboardMainContentHeader toggleSidebar={props.toggleSidebar} currentIcon={props.currentIcon} />
            <DashboardMainContentBody />
        </div>
    )
}

export default DashboardMainContent;