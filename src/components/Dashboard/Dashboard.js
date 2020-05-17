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
        this.setState({
            selectedItem:index
        });
   } 

   state={
       selectedItem:0
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
                    isActive={this.state.selectedItem===0}
                    onClickHandler={(e)=>this.itemClickHandler(e,0)}/>
                <DashboardSideBarItem 
                    image={volunteerImage} 
                    title="Volunteers" 
                    isActive={this.state.selectedItem===1}
                    onClickHandler={(e)=>this.itemClickHandler(e,1)}/>
                <DashboardSideBarItem 
                    image={beneficiariesImage} 
                    title="Beneficiaries" 
                    isActive={this.state.selectedItem===2}
                    onClickHandler={(e)=>this.itemClickHandler(e,2)}/>
                <DashboardSideBarItem 
                    image={locationImage} 
                    title="Pin Codes" 
                    isActive={this.state.selectedItem===3}
                    onClickHandler={(e)=>this.itemClickHandler(e,3)}/>
                <DashboardSideBarItem 
                    image={locationImage} 
                    title="Mandals" 
                    isActive={this.state.selectedItem===4}
                    onClickHandler={(e)=>this.itemClickHandler(e,4)}/>
                <DashboardSideBarItem 
                    image={locationImage} 
                    title="Gram Panchayats" 
                    isActive={this.state.selectedItem===5}
                    onClickHandler={(e)=>this.itemClickHandler(e,5)}/>
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