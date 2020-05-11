// import React from 'react'
// import styling from './AddNewUser.module.css'

// export default function AddNewUser(props) {

//     let userInfo = {};
//     let handleData = (event) => {
//         let keyName = event.target.name;
//         userInfo[keyName] = event.target.value
//     }

//     return (
//         <div className={styling.addUserData}>
//             <div className={styling.newUser}>
//                 <div>
//                     <p>Name: <input onChange={handleData} name="name" type="text" /></p>
//                     <p>Gender: <input onChange={handleData} name="gender" type="text" /></p>
//                     <p>Phone: <input onChange={handleData} name="id" type="text" /></p>
//                     <p>Address: <input onChange={handleData} name="residenceAddress" type="text" /></p>
//                     <p>PinCode: <input onChange={handleData} name="pinCode" type="text" /></p>
//                     <button ={() => props.addData(userInfo)}>Add Data</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
