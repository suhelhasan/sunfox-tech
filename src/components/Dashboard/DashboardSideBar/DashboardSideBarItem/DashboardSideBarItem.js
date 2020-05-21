import React from 'react';
import './DashboardSideBarItem.css';
import {  NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {toggleSidebar} from '../../../../redux/actions';

function DashboardSideBarItem(props){

    const dispatch = useDispatch();

    return(
        <NavLink to={props.linkTo} exact activeClassName="item-active">
            <div className="DashboardSideBarItem" onClick={()=>dispatch(toggleSidebar(false))}>
                <img src={props.image}/>
                <h4>{props.title}</h4>
            </div>
        </NavLink>
    )

}
export default DashboardSideBarItem;