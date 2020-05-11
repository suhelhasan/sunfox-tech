import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import EachUser from '../Each-User/EachUser'
// import AddNewUser from '../AddNewUser/AddNewUser'
import { db, auth } from '../Services/Firebase'
import styling from './UserData.module.css'
import PinCodes from '../PinCodes/PinCodes'

export default function UserData() {
    const [state, setState] = useState({
        beneficiariesData: null,
        volunteersData: null,
        pincodes: null,

    })
    // const [trackChange, setTrackChange] = useState(0)

    // useEffect(() => {
    //     const beneficiaries = [];

    //     db.collection('beneficiaries').get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 beneficiaries.push({ ...doc.data() });
    //             });
    //             setState((state, props) => ({ beneficiariesData: beneficiaries, volunteersData: state.volunteersData, pincodes: state.pincodes }));
    //             console.log('BENEFICIARIES')
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, []);

    // useEffect(() => {
    //     const volunteers = [];

    //     db.collection('volunteers').get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 volunteers.push({ id: doc.id, ...doc.data() });
    //             });
    //             setState((state, props) => ({ beneficiariesData: state.beneficiariesData, volunteersData: volunteers, pincodes: state.pincodes, }));
    //             console.log('VOLUNTEERS');

    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }, []);


    // function AddPin(pin) {
    //     // Add a new document with a generated id.
    //     db.collection("pincodes").add({
    //         name: pin
    //     })
    //         .then(function (docRef) {
    //             console.log("Document written with ID: ", docRef.id);
    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //         });

    //     setTrackChange(trackChange + 1)
    // }

    // useEffect(() => {
    //     const pincodes = [];
    //     db.collection('pincodes').get()
    //         .then((querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 // pincodes.push(doc.data());
    //                 pincodes.push({ id: doc.id, ...doc.data() });
    //             });
    //             setState((state, props) => ({ beneficiariesData: state.beneficiariesData, volunteersData: state.volunteersData, pincodes: pincodes }));
    //             console.log('PINCODE ADDED');
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }, [trackChange]);



    let users = [];
    if (state.volunteersData) {

        let userProfilesCopy = [...state.volunteersData];

        userProfilesCopy.map(eachUser => {
            users.push(<EachUser key={eachUser.id} serialNo={users.length + 1} volunteers={eachUser} beneficiaries={state.beneficiariesData} />);
        })
    }



    return (

        <div className={styling.user}>

            <h1>Volunteers List</h1>

            <ol className={styling.volunteersListData}>
                {users}
            </ol>
            {/* <PinCodes afterClick={AddPin} pincodeData={state.pincodes} /> */}
            <PinCodes pincodeData={state.pincodes} />


        </div>
    )
}



    // const addNewData = (userInfo) => {

    //     db.collection("volunteers").doc(userInfo.id).set({ ...userInfo })
    //         .then(function (docRef) {
    //             alert("DATA SUCCESSFULLY ADDED");
    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //         });
    // }
// {/* <AddNewUser addData={addNewData} /> */ }

