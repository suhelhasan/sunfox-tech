import React, { useState } from "react";
import styling from "./DataTable.module.css";
import ShowDetails from "./ShowDetails/ShowDetails";
import AssignTask from "./AssignTask/AssignTask";
import { db, auth } from "../Services/Firebase";

export default function DataTable(props) {
  //
  const [state, setState] = useState({
    showDetails: null,
    showAssignTask: null,
  });
  function hideData() {
    setState({ showDetails: null });
  }

  // ///////  VIEW INFO OF VOLUNTEERS AND USERS///////////
  let totalBeneficiariesForEach = [];
  let openVolunteersDetails = (id, indexOfVolunteer) => {
    props.beneficiaries.map((each) => {
      if (each.referrerVolunteerPhoneNumber === id) {
        totalBeneficiariesForEach.push(each);
      }
    });

    let showData = (
      <ShowDetails
        hide={hideData}
        // identity={id}
        serialNo={indexOfVolunteer + 1}
        volunteers={props.userProfilesCopy[indexOfVolunteer]}
        BeneficiariesForEach={totalBeneficiariesForEach}
      />
    );

    setState((state, props) => ({
      showDetails: showData,
      showAssignTask: state.showAssignTask,
    }));
  };
  ///////////////////////////////////////////////////////////////
  let openAssignTask = (id) => {
    let getDataOnClick = (data) => {
      let allData = {
        assignedTo: id,
        assignMentDate: new Date().toJSON().slice(0, 10),
        status: false,
        ...data,
      };

      db.collection("tasks")
        .add({
          ...allData,
        })
        .then((docRef) => {
          alert("TASK ASSIGNED SUCCESSFULLY");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });

      setState((state, props) => ({
        showDetails: null,
        showAssignTask: null,
      }));
    };

    let showForm = (
      <AssignTask addData={getDataOnClick} removePage={hideData} />
    );

    setState((state, props) => ({
      showDetails: null,
      showAssignTask: showForm,
    }));
  };

  ///////////////////////////////////////////////////////////////
  let users = [];
  if (props.userProfilesCopy) {
    let userProfilesCopy = [...props.userProfilesCopy];
    userProfilesCopy.map((eachUser) => {
      let lengthOfBeneficiaries = 0;
      //////////////counting the benefic////////////////
      props.beneficiaries.map((each) => {
        if (each.referrerVolunteerPhoneNumber === eachUser.id) {
          lengthOfBeneficiaries++;
        }
      });

      users.push(
        <tr key={eachUser.id}>
          <td className={styling.tableNumber}>{eachUser.sequence + 1}.</td>
          <td>{eachUser.name ? eachUser.name : 'NA'}</td>
          <td className={styling.hideAge}>{eachUser.age ? eachUser.age : 'NA'}</td>
          <td>{eachUser.gender ? eachUser.gender : 'NA'}</td>
          <td>{eachUser.id ? eachUser.id : 'NA'}</td>
          <td>{eachUser.pinCode ? eachUser.pinCode : 'NA'}</td>
          <td className={styling.hideBeneficiaries}>{lengthOfBeneficiaries}</td>
          <td>
            <button
              onClick={() =>
                openVolunteersDetails(eachUser.id, eachUser.sequence)
              }
            >
              View
            </button>
            <button onClick={() => openAssignTask(eachUser.id)}>
              Assign Task
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className={styling.table}>
        <tbody>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Pin Code</th>
            <th> Beneficiaries</th>
            <th>Actions</th>
          </tr>

          {users}
        </tbody>
      </table>

      {state.showDetails}
      {state.showAssignTask}
    </div>
  );
}
