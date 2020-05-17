import React,{Component} from 'react';
import './Dashboard.css';
import './DashboardSideBar/DashboardSideBarItem/DashboardSideBarItem';
import DashboardSideBarItem from './DashboardSideBar/DashboardSideBarItem/DashboardSideBarItem';
import volunteerImage from '../../assets/images/volunteer.svg';
import homeImg from '../../assets/images/home.svg';
import locationImage from '../../assets/images/location.svg';
import beneficiariesImage from '../../assets/images/beneficiaries.svg';


class Dashboard extends Component{

   itemClickHandler = (event, index) => {

   } 

   render(){
    return (
        <div className="dashboard-container">
            <div className="dashboard-sidebar">
    
                <div className="sidebar-header">
    
                </div>
                <DashboardSideBarItem 
                    image={homeImg} 
                    title="Home" 
                    onClick={(e)=>this.itemClickHandler(e,0)}/>
                <DashboardSideBarItem 
                    image={volunteerImage} 
                    title="Volunteers" 
                    onClick={(e)=>this.itemClickHandler(e,1)}/>
                <DashboardSideBarItem 
                    image={beneficiariesImage} 
                    title="Beneficiaries" 
                    onClick={(e)=>this.itemClickHandler(e,2)}/>
                <DashboardSideBarItem 
                    image={locationImage} 
                    title="Pin Codes" 
                    onClick={(e)=>this.itemClickHandler(e,3)}/>
                <DashboardSideBarItem 
                    image={locationImage} 
                    title="Mandals" 
                    onClick={(e)=>this.itemClickHandler(e,4)}/>
                <DashboardSideBarItem 
                    image={locationImage} 
                    title="Gram Panchayats" 
                    onClick={(e)=>this.itemClickHandler(e,5)}/>
            </div>
            <div className="dashboard-main-content">
    
            </div >
            {/* <h1>This is dashboard</h1>
            <button onClick={props.onLogoutClickHandler}>Logout</button>
         */}
        </div>
        );
   }
}

export default Dashboard;