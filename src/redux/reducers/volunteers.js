import {FETCH_VOLUNTEERS} from '../actions/actionNames';

const volunteersReducer = (state=[],action)=>{
    switch(action.type){
        case FETCH_VOLUNTEERS:
            return action.payload;
            default: return state;
    }
}

export default volunteersReducer;