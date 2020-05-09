import React, { useState } from 'react';
import styling from './EachUser.module.css'
import ShowDetails from './ShowDetails/ShowDetails'
import Backdrop from './Backdrop/Backdrop'

export default function EachUser(props) {

    const [state, setState] = useState({
        showData: null
    })
    function hideData() {
        setState({ showData: null })
    }

    let totalBeneficiariesForEach = []
    let openNewPage = (id) => {

        props.beneficiaries.map(each => {
            if (each.referrerVolunteerPhoneNumber === id) {
                totalBeneficiariesForEach.push(each);
            }
        })
        let showDetails = <ShowDetails serialNo={props.serialNo} hide={hideData} volunteers={props.volunteers} BeneficiariesForEach={totalBeneficiariesForEach} />

        setState({ showData: showDetails })
    }


    return (
        <>
            <li className={styling.person}>
                <div className={styling.volunteerInfo}>
                    <ul>
                        <li><h3>◉ Name: {props.volunteers.name}</h3></li>
                        <li><h3>◉ Gender: {props.volunteers.gender}</h3></li>
                        <li><h3>◉ Phone: {props.volunteers.id}</h3></li>
                        <li><h3>◉ Address: {props.volunteers.residenceAddress}</h3></li>
                        <li><h3>◉ Pincode: {props.volunteers.pinCode}</h3></li>

                    </ul>
                    <button className={styling.moreInfoButton} onClick={() => openNewPage(props.volunteers.id)}>More Info</button>
                </div>
            </li>

            <div >{state.showData}</div>
        </>
    )
}
