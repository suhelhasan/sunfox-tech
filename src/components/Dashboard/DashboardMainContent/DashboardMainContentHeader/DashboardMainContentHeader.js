import React from 'react';
import './DashboardMainContentHeader.css';
import { FaBars, FaTimes } from "react-icons/fa";

export default function DashboardMainContentHeader(props) {



    return (
        <div className="dashboard-main-content-header">
            {/* <FaEllipsisV /> */}
            {props.currentIcon === false ?
                <FaBars className='burgerMenu' onClick={props.toggleSidebar} />
                :
                <FaTimes className='crossIcon' onClick={props.toggleSidebar} />
            }




            {/* <FaTimes /> */}
            <button>Logout</button>
        </div>
    );
}

