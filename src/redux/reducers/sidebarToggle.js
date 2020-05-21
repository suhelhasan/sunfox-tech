import {TOGGLE_SIDEBAR} from '../actions/actionNames';

const initialState = {
    sideBarExpanded : false,
    sideBarToggleClicked : true
}

const toggleSidebarReducer = (state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_SIDEBAR:
            return {
                sideBarExpanded: !state.sideBarExpanded,
                sideBarToggleClicked: action.payload
            };
        default: 
            return state;    
    }
}

export default toggleSidebarReducer;