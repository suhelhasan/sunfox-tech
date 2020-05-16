import React from 'react';

function Dashboard(props){
    return (
        <div>
    <h1>This is dashboard</h1>
    <button onClick={props.onLogoutClickHandler}>Logout</button>
    </div>
    );
}

export default Dashboard;