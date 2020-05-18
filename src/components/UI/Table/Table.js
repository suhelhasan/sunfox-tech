import React from 'react';
import './Table.css';

export default function Table(props){
    return(
        <div className="table">
                <table> 
                        {props.tableHeadData}
                        {props.tableBodyData}
                   
                </table>
        </div>
    )
}