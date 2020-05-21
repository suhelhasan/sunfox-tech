import React from 'react';
import './AddItemHeader.css';
import Button from '../../../UI/Button/Button';
import Loader2 from '../../../UI/Loader2/Loader2';

export default function AddItemHeader(props){

    return (
        <div className="area-add-value">
        <p>{props.title}</p>
        <div>
            <input type={props.type}
                placeholder={props.placeholder} 
                value={props.value} 
                onChange={(e)=>props.onChangeHandler(e.target.value)}/>
             {props.loading ?
              <Loader2  size="40" />
            : 
            <Button onClick={props.addItemHandler}>Add</Button>
             } 
        </div>
    </div>
    )

}
