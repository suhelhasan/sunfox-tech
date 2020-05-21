import {FETCH_PANCHAYATS} from '../actions/actionNames';

let initialState={
    isFetching:true,
    data:[]
}

const panchayatsReducer = (state=initialState,action)=>{

    switch(action.type){
        case FETCH_PANCHAYATS:
            return{ 
                fetching:false,
                data: action.payload};
        default: return state;    
    }

}

export default panchayatsReducer;