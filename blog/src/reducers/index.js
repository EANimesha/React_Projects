import {combineReducers} from 'redux'
import postReducer from './postReducers'
import usersReducers from './usersReducers';


export default combineReducers({
    posts:postReducer,
    users:usersReducers
});