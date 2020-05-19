import React, { Component } from 'react';
import './Dashboard.css';
import DashboardSideBar from './DashboardSideBar/DashboardSideBar';
import DashboardMainContent from './DashboardMainContent/DashboardMainContent';

class Dashboard extends Component {

    itemClickHandler = (event, index) => {
        this.setState({
            selectedItem: index
        });
    }

    state = {
        selectedItem: 0,
        sidebar: false,
    }

    toggleSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }



    render() {
        return (
            <div className="dashboard-container">
                {this.state.sidebar ?
                    <DashboardSideBar
                        selectedItem={this.state.selectedItem}
                        itemClickHandler={this.itemClickHandler}
                    />
                    : null
                }

                <DashboardMainContent toggleSidebar={this.toggleSidebar} currentIcon={this.state.sidebar} />

                {/* <h1>This is dashboard</h1>
            <button onClick={props.onLogoutClickHandler}>Logout</button>
         */}
            </div>
        );
    }
}

export default Dashboard;