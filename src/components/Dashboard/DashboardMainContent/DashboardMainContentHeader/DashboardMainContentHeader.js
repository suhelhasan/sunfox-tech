import React from 'react';
import './DashboardMainContentHeader.css';
import { FaBars } from "react-icons/fa";

export default function DashboardMainContentHeader(props) {



    return (
        <div className="dashboard-main-content-header">
            {/* <FaEllipsisV /> */}

            <FaBars className='burgerMenu' onClick={props.openSidebar} />


            {/* <FaTimes /> */}
            <button>Logout</button>
        </div>
    );
}

