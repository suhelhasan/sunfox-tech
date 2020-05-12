import React from 'react'
import styling from './AssignTask.module.css'

function AssignTask(props) {

    let userInfo = {};
    let handleData = (event) => {
        event.preventDefault();
        let keyName = event.target.name;
        userInfo[keyName] = event.target.value;
    }

    function assignTheTask() {
        if (Object.values(userInfo).length === 2 && Object.values(userInfo).every(e => e.length > 4)) {
            props.addData(userInfo)
        }
        else {
            alert('Please write more.')
        }

    }
    return (
        <div className={styling.AssignTask}>
            <h1 className={styling.crossSign} onClick={props.removePage}>X</h1>
            <div>
                Enter Title
                <input required onChange={handleData} type="text" name='title' /><br />
                Enter Description
                <textarea rows="4" cols="50" required onChange={handleData} type="text" name='description' />
                <button type="submit" onClick={assignTheTask}><h2>Assign Task</h2></button>
            </div>
        </div>
    )
}

export default React.memo(AssignTask);