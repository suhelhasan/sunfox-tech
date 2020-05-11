import React, { useState } from 'react';
import styling from './EachUser.module.css'
import ShowDetails from './ShowDetails/ShowDetails'
import AssignTask from './AssignTask/AssignTask'
// import Backdrop from './Backdrop/Backdrop'

function EachUser(props) {

    const [state, setState] = useState({
        showDetails: null,
        showAssignTask: null
    })
    function hideData() {
        setState({ showDetails: null })
    }

    let totalBeneficiariesForEach = []
    let openVolunteersDetails = (id) => {

        props.beneficiaries.map(each => {
            if (each.referrerVolunteerPhoneNumber === id) {
                totalBeneficiariesForEach.push(each);
            }
        })
        let showData = <ShowDetails serialNo={props.serialNo} hide={hideData} volunteers={props.volunteers} BeneficiariesForEach={totalBeneficiariesForEach} />

        setState((state, props) => ({ showDetails: showData, showAssignTask: state.showAssignTask }))
    }


    let openAssignTask = (id) => {

        let getDataOnClick = (data) => {
            if (Object.keys(data).length === 5) {
                //     db.collection("volunteers").doc(userInfo.id).set({ ...userInfo })
                //         .then(function (docRef) {
                //             alert("DATA SUCCESSFULLY ADDED");
                //         })
                //         .catch(function (error) {
                //             console.error("Error adding document: ", error);
                //         });
                // }
                let dataAdded = <h1>Data Added</h1>
                setState((state, props) => ({ showDetails: state.showDetails, showAssignTask: dataAdded }));

                setTimeout(() => {
                    setState((state, props) => ({ showDetails: state.showDetails, showAssignTask: null }))
                }, 2000)
            }
            else {
                setState((state, props) => ({ showDetails: state.showDetails, showAssignTask: null }))
            }
        }
        let showForm = <AssignTask addData={getDataOnClick} />

        setState((state, props) => ({ showDetails: state.showDetails, showAssignTask: showForm }))
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
                    <button className={styling.moreInfoButton} onClick={() => openVolunteersDetails(props.volunteers.id)}>More Info</button>

                    {/* I am newly added */}
                    <button className={styling.moreInfoButton} onClick={() => openAssignTask(props.volunteers.id)}>Assign Task</button>
                </div>
            </li>

            <div >{state.showDetails}</div>
            <div >{state.showAssignTask}</div>
        </>
    )
}

export default React.memo(EachUser);
