import React from 'react';
import './DashboardMainContentHeader.css';
import Button from '../../../UI/Button/Button';
import menuImg from '../../../../assets/images/hamburger.svg';
import {useDispatch} from 'react-redux';
import {toggleSidebar} from '../../../../redux/actions';

export default function DashboardMainContentHeader(props){

    const dispatch  = useDispatch();

    return (
        <div className="dashboard-main-content-header">
            <img src={menuImg} onClick={()=>dispatch(toggleSidebar(true))}/>
            <Button onClick={props.logoutHandler}>Logout</Button>
        </div>
    );
}

