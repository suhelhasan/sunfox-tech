import {FETCH_PINCODES} from '../actions/actionNames';

let initialState={
    isFetching:true,
    data:[]
}

const pincodesReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_PINCODES:
            return{ 
                fetching:false,
                data: action.payload};
        default: 
            return state;    
    }
}

export default pincodesReducer;