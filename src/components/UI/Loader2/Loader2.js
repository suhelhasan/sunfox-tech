import React from 'react';
import './Loader2.css';
import { Rolling } from "react-loading-io";

const Loader2 = (props) => {
    return (
        <div className="loader2">
           <Rolling size={props.size} color="#1a7ef6" />
        </div>
    )
}
export default Loader2;