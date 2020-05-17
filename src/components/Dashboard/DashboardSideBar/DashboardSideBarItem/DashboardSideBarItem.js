import React from 'react';
import myImg from '../../../../assets/images/gestures.svg';
import './DashboardSideBarItem.css';

function DashboardSideBarItem(props){

    return(
        <div className={"DashboardSideBarItem" + (props.isActive?" item-active":"")}>
            <img src={myImg}/>
            <h4>{props.title}</h4>
        </div>
    )

}
export default DashboardSideBarItem;