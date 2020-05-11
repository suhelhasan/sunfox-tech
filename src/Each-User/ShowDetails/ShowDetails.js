import React from "react";
import styling from "./ShowDetails.module.css";

function ShowDetails(props) {
  let dataV = props.volunteers;
  let volunteerData = [];
  for (let i in dataV) {
    if (typeof dataV[i] !== "object") {
      volunteerData.push(
        <li key={i}>
          <p>
            ➤ {i} : {dataV[i]}
          </p>
        </li>
      );
    }
  }

  let dataB = props.BeneficiariesForEach;

  let beneficiariesData = [];
  dataB.map((each) => {
    let eachDataArray = [];
    for (let i in each) {
      if (typeof each[i] !== "object") {
        eachDataArray.push(
          <li key={i}>
            <p>
              ➤ {i} : {each[i]}
            </p>
          </li>
        );
      }
    }
    beneficiariesData.push(
      <li key={each.phone}>
        <ul className={styling.diff}>{eachDataArray}</ul>
      </li>
    );
  });

  var FinalBeneficiaries = <ol>{beneficiariesData}</ol>;
  if (dataB.length === 0) {
    FinalBeneficiaries = <h2 style={{ color: 'red' }}>No Data Available</h2>;
  }
  return (
    <div className={styling.ShowDetails}>
      <h1 className={styling.RemoveAll} onClick={() => props.hide}>
        X
      </h1>

      <div className={styling.ShowDetailsInner}>
        <div className={styling.volunteers}>
          <h1>{props.serialNo}. Volunteer Data</h1>
          <ul>{volunteerData}</ul>
        </div>
        <div className={styling.BeneficiariesForEach}>
          <h1>Beneficiaries Data</h1>

          {FinalBeneficiaries}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ShowDetails);