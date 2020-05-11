import React, { useState } from 'react'
import styling from './AssignTask.module.css'

function AssignTask(props) {
    // let [state, setState] = useState(null)

    // if (true) {
    //     setState(!state)
    // }

    let userInfo = {};
    let handleData = (event) => {
        event.preventDefault();
        let keyName = event.target.name;
        userInfo[keyName] = event.target.value
    }
    return (
        <div className={styling.AssignTask}>
            <h1 className={styling.crossSign} onClick={() => props.addData(userInfo)}>X</h1>
            <div>
                Enter Name
                <input required onChange={handleData} type="text" /><br />
                Enter Name
                <input required onChange={handleData} type="text" /><br />
                Enter Name
                <input required onChange={handleData} type="text" /><br />
                Enter Name
                <input required onChange={handleData} type="text" /><br />
                Enter Name
                <input required onChange={handleData} type="text" /><br />
                <button type="submit" onClick={() => props.addData(userInfo)}><h2>Assign Task</h2></button>
            </div>
        </div>
    )
}

export default React.memo(AssignTask);