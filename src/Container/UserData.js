import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import EachUser from '../Each-User/EachUser'
import AddNewUser from '../AddNewUser/AddNewUser'
import { db, auth } from '../Services/Firebase'
import styling from './UserData.module.css'
import PinCodes from '../PinCodes/PinCodes'


export default function UserData() {
    const [state, setState] = useState({
        beneficiariesData: null,
        volunteersData: null,
        pincodes: null,
    })

    useEffect(() => {

        db.collection('beneficiaries').get()
            .then((querySnapshot) => {
                const beneficiaries = [];
                querySnapshot.forEach((doc) => {
                    beneficiaries.push({ ...doc.data() });
                });
                setState((state, props) => ({ beneficiariesData: beneficiaries, volunteersData: state.volunteersData, pincodes: state.pincodes }));
            })
            .catch(error => {
                console.log(error)
            })

        db.collection('volunteers').get()
            .then((querySnapshot) => {
                const volunteers = [];
                querySnapshot.forEach((doc) => {
                    volunteers.push({ id: doc.id, ...doc.data() });
                    // volunteers.push({ ...doc.data() });
                });
                setState((state, props) => ({ beneficiariesData: state.beneficiariesData, volunteersData: volunteers, pincodes: state.pincodes }));
            })
            .catch(error => {
                console.log(error)
            })


    }, []);


    useEffect(() => {
        db.collection('pincodes').get()
            .then((querySnapshot) => {
                const pincodes = [];
                querySnapshot.forEach((doc) => {
                    pincodes.push(doc.data());
                });
                setState((state, props) => ({ beneficiariesData: state.beneficiariesData, volunteersData: state.volunteersData, pincodes: pincodes }));
            })
            .catch(error => {
                console.log(error)
            })

    }, [state.pincodes]);
    
    // const addNewData = (userInfo) => {

    //     db.collection("volunteers").doc(userInfo.id).set({ ...userInfo })
    //         .then(function (docRef) {
    //             alert("DATA SUCCESSFULLY ADDED");
    //         })
    //         .catch(function (error) {
    //             console.error("Error adding document: ", error);
    //         });
    // }

    function AddPin(pin) {
        // Add a new document with a generated id.
        db.collection("pincodes").add({
            name: pin
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }


    let users = [];
    if (state.volunteersData) {

        let userProfilesCopy = [...state.volunteersData];

        userProfilesCopy.map(eachUser => {
            users.push(<EachUser key={eachUser.id} serialNo={users.length + 1} volunteers={eachUser} beneficiaries={state.beneficiariesData} />);
        })
    }



    return (

        <div className={styling.user}>
            {/* <AddNewUser addData={addNewData} /> */}
            <h1>Volunteers List</h1>

            <ol className={styling.volunteersListData}>
                {users}
            </ol>
            <PinCodes afterClick={AddPin} pincodeData={state.pincodes} />


        </div>
    )
}