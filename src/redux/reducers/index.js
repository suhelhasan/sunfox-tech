import beneficiariesReducer from './beneficiaries';
import volunteersReducer from './volunteers';
import pincodesReducer from './pincodes';
import mandalsReducer from './mandals';
import panchayatsReducer from './panchayats';
import toggleSidebarReducer from './sidebarToggle';
import authReducer from './auth';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    beneficiaries: beneficiariesReducer,
    volunteers: volunteersReducer,
    pincodes: pincodesReducer,
    mandals: mandalsReducer,
    panchayats: panchayatsReducer,
    toggleSidebar: toggleSidebarReducer,
    auth: authReducer
})


export default allReducers;