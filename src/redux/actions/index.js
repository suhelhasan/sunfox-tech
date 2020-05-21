import * as actionNames from './actionNames';

export const fetchPincodes = () => {
    return (dispatch,getState,{firebase})=>{
        firebase.database().ref("pincodes").on('value',(snapshot)=>{    
        let codes = snapshot.val();
        let vPincodes = [];
        for(let code in codes){
            console.log("Pincode",code);
            vPincodes.push({
                key: code,
                value: codes[code]
            });
        }
        dispatch({
            type: actionNames.FETCH_PINCODES,
            payload: vPincodes
        })
    })}
}

export const fetchMandals = () => {
    return (dispatch,getState,{firebase})=>{
        firebase.database().ref("mandals").on('value',(snapshot)=>{   
        let vMandals = []; 
        let codes = snapshot.val();
        for(let code in codes){
            vMandals.push({
                key: code,
                value: codes[code]
            });
        }
        dispatch({
            type: actionNames.FETCH_MANDALS,
            payload: vMandals
        })
    })
    }
}

export const fetchPanchayats = () => {
    return (dispatch,getState,{firebase})=>{
        firebase.database().ref("panchayats").on('value',(snapshot)=>{ 
        let vPanchayats = [];
        let codes = snapshot.val();
        for(let code in codes){
            vPanchayats.push({
                key: code,
                value: codes[code]
            });
        }
        dispatch({
            type: actionNames.FETCH_PANCHAYATS,
            payload: vPanchayats
        })
    })
    }
}

export const fetchBeneficiaries = () => {
    return (dispatch,getState,{firebase})=>{
          firebase.firestore().collection('beneficiaries').get()
            .then((snapshot) => {
                let arr = [];
                snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                arr.push(doc.data());
                });
                dispatch({
                    type: actionNames.FETCH_BENEFICIARIES,
                    payload: arr
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionNames.FETCH_BENEFICIARIES_ERROR,
                    payload: err
                })
            });
    }
}

export const loginUser = (user) => {
    return (dispatch,getState,{firebase})=>{   
        dispatch({
            type: actionNames.LOGIN_USER,
            payload: user
        })
    }
}

export const logoutUser = () => {
    return (dispatch,getState,{firebase}) => {
         dispatch({
            type: actionNames.LOGOUT_USER,
        })
    }
}

export const authError = (err) => {
    return (dispatch,getState,{firebase}) => {
         dispatch({
            type: actionNames.AUTH_ERROR,
            payload: err
        })
    }
}


export const fetchVolunteers = () => {
    return (dispatch,getState,{firebase})=>{
        firebase.firestore().collection('volunteers').get()
            .then((snapshot) => {
                let arr = [];
                snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
                arr.push(doc.data());
                });
                dispatch({
                    type: actionNames.FETCH_VOLUNTEERS,
                    payload: arr
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionNames.FETCH_VOLUNTEERS_ERROR,
                    payload: err
                })
            });
    }
}

export const toggleSidebar = (toggleClicked) => {
    return (dispatch,getState,{firebase})=>{
        dispatch({
            type:actionNames.TOGGLE_SIDEBAR,
            payload: toggleClicked
        })
    }
}