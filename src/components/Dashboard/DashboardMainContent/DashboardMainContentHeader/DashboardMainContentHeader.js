import React from 'react';
import './DashboardMainContentHeader.css';
import Button from '../../../UI/Button/Button';

export default function DashboardMainContentHeader(props){
    return (
        <div className="dashboard-main-content-header">
            <Button onClick={props.logoutHandler}>Logout</Button>
        </div>
    );
}

