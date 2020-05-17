import React from 'react';
import './DashboardSideBarItem.css';

function DashboardSideBarItem(props){

    return(
        <div 
        onClick={props.onClickHandler}
        className={"DashboardSideBarItem" + (props.isActive?" item-active":"")}>
            <img src={props.image}/>
            <h4>{props.title}</h4>
        </div>
    )

}
export default DashboardSideBarItem;