import React, { useState } from 'react'
import styling from './PinCodes.module.css'


function PinCode(props) {

    const [state, setState] = useState([])

    let pinCodes = [];
    if (props.pincodeData) {
        props.pincodeData.map(eachPincode => {
            pinCodes.push(<li key={eachPincode.id}><h3>{eachPincode.name}</h3></li>);
        })
    }

    function addPinCodeToDB() {
        let value =
            <div className={styling.addNewPIn}>

                <h1 onClick={removePage}>X</h1>
                <div>
                    <h1>Add Pin Code</h1>
                    <input required placeholder='Enter Pin Code' onChange={handleData} name="inputValue" type="number"></input>
                    <button onClick={onClickHandle}>ADD</button>
                </div>
            </div>
        setState(value)

    }


    function removePage() {
        setState([]);
    }

    let inputValue;
    let handleData = (event) => {
        event.preventDefault();
        inputValue = event.target.value;
    }

    function onClickHandle() {

        if (inputValue === undefined || inputValue.length < 4) {
            alert('Length should be greater then 3')
        }
        else {
            props.afterClick(inputValue);
            setState([]);
            setTimeout(() => {
                alert('PINCODE ADDED SUCCESSFULLY')
            }, 500);
        }
    }

    return (
        <div className={styling.pincodes}>
            <div className={styling.header}>
                <h1>Pin Codes</h1>
                <button className={styling.addPinCodeButton} onClick={addPinCodeToDB}>Add Pin Code</button>

            </div>
            <div className={styling.pinSection}>
                <ol>
                    {pinCodes}
                </ol>

            </div>
            {state}
        </div>
    )
}



export default React.memo(PinCode);

