import React from 'react';
import './DashboardSideBar.css';
import DashboardSideBarItem from './DashboardSideBarItem/DashboardSideBarItem';
import volunteerImage from '../../../assets/images/volunteer.svg';
import homeImg from '../../../assets/images/home.svg';
import locationImage from '../../../assets/images/location.svg';
import beneficiariesImage from '../../../assets/images/beneficiaries.svg';
import {Link,NavLink} from 'react-router-dom';


function DashboardSideBar(props){
        return (
            <div className="dashboard-sidebar">
            <div className="sidebar-header">
            </div>
                <DashboardSideBarItem 
                    linkTo={"/admin/"}
                    image={homeImg} 
                    title="Home" />
                <DashboardSideBarItem 
                    linkTo={"/admin/volunteers/"}
                    image={volunteerImage} 
                    title="Volunteers" />
                <DashboardSideBarItem 
                    linkTo={"/admin/beneficiaries/"}
                    image={beneficiariesImage} 
                    title="Beneficiaries" />
                <DashboardSideBarItem 
                    linkTo={"/admin/pincodes/"}
                    image={locationImage} 
                    title="Pin Codes" />
                <DashboardSideBarItem 
                    linkTo={"/admin/mandals/"} 
                    image={locationImage} 
                    title="Mandals" />
                <DashboardSideBarItem 
                    linkTo={"/admin/panchayats/"}
                    image={locationImage} 
                    title="Gram Panchayats" />
        </div>
        );
}

export default DashboardSideBar;


