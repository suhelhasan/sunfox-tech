import {LOGIN_USER,LOGOUT_USER,AUTH_ERROR} from '../actions/actionNames';

let initialState = {
    user:null,
    error:null
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
                user: action.payload,
                error: null
            };
        case AUTH_ERROR:
            return {
                user:null,
                error: action.payload
            }    
        case LOGOUT_USER:
             return {
                 user: null,
                 error: null
             };
       default: return state;
    }
}

export default authReducer;