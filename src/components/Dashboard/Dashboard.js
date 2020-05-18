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

    openSidebar = () => {
        this.setState({ sidebar: true })
    }

    closeSidebar = () => {
        this.setState({ sidebar: false })
    }

    render() {
        return (
            <div className="dashboard-container">
                {this.state.sidebar ?
                    <DashboardSideBar
                        selectedItem={this.state.selectedItem}
                        itemClickHandler={this.itemClickHandler}
                        closeSidebar={this.closeSidebar}
                    />
                    : null
                }

                <DashboardMainContent openSidebar={this.openSidebar} />

                {/* <h1>This is dashboard</h1>
            <button onClick={props.onLogoutClickHandler}>Logout</button>
         */}
            </div>
        );
    }
}

export default Dashboard;