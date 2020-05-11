import React, { useState } from 'react'
import styling from './PinCodes.module.css'
// import AddPIn from './AddPin/AddPin'
function PinCodes(props) {

    const [state, setState] = useState({
        seeAfterClick: null
    })

    let pinCodes = [];
    if (props.pincodeData) {
        props.pincodeData.map(eachPincode => {
            pinCodes.push(<li key={eachPincode.id}><h3>◉ {eachPincode.name}</h3></li>);
        })
    }


    function addPinCodeToDB() {
        let value =
            <div className={styling.addNewPIn}>
                <h1 onClick={() => removePage}>X</h1>
                <div>
                    <h1>Add Pin Code</h1>
                    <input required placeholder='Enter Pin Code' onChange={handleData} name="inputValue" type="number"></input>
                    <button onClick={() => onClickHandle}>ADD</button>
                </div>
            </div>
        setState((state, props) => ({ seeAfterClick: value }))

    }


    function removePage() {
        setState({ seeAfterClick: null });
    }

    let inputValue;
    let handleData = (event) => {
        event.preventDefault();
        inputValue = event.target.value;
    }

    function onClickHandle() {
        if (inputValue.length < 4) {
            alert('Length should be greater then 3')
        }
        else {
            props.afterClick(inputValue);
            setState({ seeAfterClick: <h1>Data Added Successfully !!</h1> });
            setTimeout(() => {
                setState({ seeAfterClick: null });
            }, 2000);
        }
    }

    return (
        <div className={styling.pincodes}>

            <h1>Pin Codes....</h1>
            {state.seeAfterClick}
            <ul>
                {pinCodes}
            </ul>
            <button className={styling.addPinCodeButton} onClick={() => addPinCodeToDB}>Add Pin Code</button>

        </div>
    )
}



export default React.memo(PinCodes);

