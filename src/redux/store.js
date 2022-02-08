import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './userSlice'
import businessReducer from './businessSlice'
import loginReducer  from './loginSlice';
import holidayReducer  from './holidaySlice';
import integrateReducer  from './integrateSlice';


export default configureStore({
    reducer:{
        user: userReducer,
        business: businessReducer,
        login: loginReducer,
        holiday: holidayReducer,
        integrate: integrateReducer,
    },

});
    