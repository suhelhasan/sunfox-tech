import React, { useState, useEffect } from 'react'
import { db, auth } from '../Services/Firebase'
import PinCode from './PinCode'

export default function PinCodeSection() {

    let [value, setValue] = useState(0);
    let [pinCodeState, setPinCodeState] = useState([]);

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

        setValue(value + 1);
    }

    useEffect(() => {

        db.collection('pincodes').get()
            .then((querySnapshot) => {
                const pincodes = [];
                querySnapshot.forEach((doc) => {
                    pincodes.push({ id: doc.id, ...doc.data() });
                });
                setPinCodeState(pincodes);
                console.log('PINCODE ADDED');
            })
            .catch(error => {
                console.log(error)
            })

    }, [value]);

    return (
        <div>
            <PinCode afterClick={AddPin} pincodeData={pinCodeState} />
        </div>
    )
}
