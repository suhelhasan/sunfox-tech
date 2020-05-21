import React from 'react';
import './DashboardSideBar.css';
import DashboardSideBarItem from './DashboardSideBarItem/DashboardSideBarItem';
import volunteerImage from '../../../assets/images/volunteer.svg';
import homeImg from '../../../assets/images/home.svg';
import locationImage from '../../../assets/images/location.svg';
import beneficiariesImage from '../../../assets/images/beneficiaries.svg';
import mandalsImage from '../../../assets/images/mandal.svg';
import panchayatsImage from '../../../assets/images/panchayat.svg';
import {useSelector} from 'react-redux';
import salutingImg from '../../../assets/images/saluting.svg';

function DashboardSideBar(props){

        const state = useSelector(state=>state.toggleSidebar)
        const sideBarExpanded = state.sideBarExpanded;
        const toggleClicked = state.sideBarToggleClicked;
        const authData = useSelector(state=>state.auth)

        const email = authData.user['email']
        console.log("Toggle",sideBarExpanded);

        return (
            <div className={"dashboard-sidebar" + (!sideBarExpanded?(!toggleClicked?" sidebar-hidden-on-item-click":" sidebar-hidden"):"")}>
            <div className="sidebar-header">
                <div>
                    <div className="sidebar-header-inner-div">
                        <img src={salutingImg}/>
                        <p>Hello,</p>
                    </div>
                    <p>{email}</p>
                </div>
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
                    image={mandalsImage} 
                    title="Mandals" />
                <DashboardSideBarItem 
                    linkTo={"/admin/panchayats/"}
                    image={panchayatsImage} 
                    title="Gram Panchayats" />
        </div>
        );
    
}

export default DashboardSideBar;


