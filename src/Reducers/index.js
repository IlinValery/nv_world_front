import { combineReducers } from 'redux'
import sampleReducer from "./sample_reducer";
import users from "./users"


export default combineReducers({sampleReducer, users}) //insert here
