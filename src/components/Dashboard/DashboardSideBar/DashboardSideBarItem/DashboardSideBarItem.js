import React from 'react';
import './DashboardSideBarItem.css';
import { Link, NavLink } from 'react-router-dom';

function DashboardSideBarItem(props){

    return(
        <NavLink to={props.linkTo} exact activeClassName="item-active">
            <div className="DashboardSideBarItem">
                <img src={props.image}/>
                <h4>{props.title}</h4>
            </div>
        </NavLink>
    )

}
export default DashboardSideBarItem;