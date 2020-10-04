import { combineReducers } from 'redux'
import sampleReducer from "./sample_reducer";
import users from "./users"
import filterSkills from './filter_skills';
import skills from "./skills"


export default combineReducers({sampleReducer, users, filterSkills, skills}) //insert here
