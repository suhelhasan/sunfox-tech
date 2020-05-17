import React from 'react';
import './DashboardSideBar.css';
import DashboardSideBarItem from './DashboardSideBarItem/DashboardSideBarItem';
import volunteerImage from '../../../assets/images/volunteer.svg';
import homeImg from '../../../assets/images/home.svg';
import locationImage from '../../../assets/images/location.svg';
import beneficiariesImage from '../../../assets/images/beneficiaries.svg';


function DashboardSideBar(props){
        return (
            <div className="dashboard-sidebar">
            <div className="sidebar-header">
            </div>
            <DashboardSideBarItem 
                image={homeImg} 
                title="Home" 
                isActive={props.selectedItem===0}
                onClickHandler={(e)=>props.itemClickHandler(e,0)}/>
            <DashboardSideBarItem 
                image={volunteerImage} 
                title="Volunteers" 
                isActive={props.selectedItem===1}
                onClickHandler={(e)=>props.itemClickHandler(e,1)}/>
            <DashboardSideBarItem 
                image={beneficiariesImage} 
                title="Beneficiaries" 
                isActive={props.selectedItem===2}
                onClickHandler={(e)=>props.itemClickHandler(e,2)}/>
            <DashboardSideBarItem 
                image={locationImage} 
                title="Pin Codes" 
                isActive={props.selectedItem===3}
                onClickHandler={(e)=>props.itemClickHandler(e,3)}/>
            <DashboardSideBarItem 
                image={locationImage} 
                title="Mandals" 
                isActive={props.selectedItem===4}
                onClickHandler={(e)=>props.itemClickHandler(e,4)}/>
            <DashboardSideBarItem 
                image={locationImage} 
                title="Gram Panchayats" 
                isActive={props.selectedItem===5}
                onClickHandler={(e)=>props.itemClickHandler(e,5)}/>
        </div>
        );
}

export default DashboardSideBar;


