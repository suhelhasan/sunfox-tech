import {FETCH_BENEFICIARIES} from '../actions/actionNames';

const beneficiariesReducer = (state=[],action)=>{
    switch(action.type){
        case FETCH_BENEFICIARIES:
            return action.payload;
        default: return state;
    }
}

export default beneficiariesReducer;