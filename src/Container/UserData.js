import React, { useState, useEffect } from 'react';
import { db, auth } from '../Services/Firebase'
import styling from './UserData.module.css'
import DataTable from '../DataTable/DataTable'

function UserData() {

    const [beneficiariesData, setBeneficiariesData] = useState([]);
    const [volunteersData, setVolunteersData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {


        db.collection('beneficiaries').get()
            .then((querySnapshot) => {
                const beneficiaries = [];
                querySnapshot.forEach((doc) => {
                    beneficiaries.push({ ...doc.data() });
                });
                setBeneficiariesData(beneficiaries)
                console.log('BENEFICIARIES')
            })
            .catch(error => {
                setError(error);
            })
    }, []);

    useEffect(() => {

        db.collection('volunteers').get()
            .then((querySnapshot) => {
                const volunteers = [];
                let userIndex = 0;
                querySnapshot.forEach((doc) => {
                    volunteers.push({ id: doc.id, sequence: userIndex++, ...doc.data() });
                });
                setVolunteersData(volunteers)
                console.log('VOLUNTEERS');

            })
            .catch(error => {
                setError(error);
            })

    }, []);


    return (

        <div className={styling.user}>

            {error ? <p>Ops, </p> : null}
            <h1>Volunteers List</h1>

            <DataTable userProfilesCopy={volunteersData} beneficiaries={beneficiariesData} />

        </div>
    )
}


export default React.memo(UserData);