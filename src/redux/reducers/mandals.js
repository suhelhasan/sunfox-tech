import {FETCH_MANDALS} from '../actions/actionNames';

let initialState={
    isFetching:true,
    data:[]
}

const mandalsReducer = (state=initialState,action)=>{

    switch(action.type){
        case FETCH_MANDALS:
            return{ 
                fetching:false,
                data: action.payload};
        default: return state;
    }

}

export default mandalsReducer;