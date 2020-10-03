import {SAMPLE_ACTION_NAME} from "../Constants/ActionTypes";

const initialState = {};

export default function sampleReducer(state = initialState, action){
    if (action.type === SAMPLE_ACTION_NAME){
        return action.payload;
    }
    return state;
}