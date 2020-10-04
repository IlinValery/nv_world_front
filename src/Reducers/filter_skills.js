const initialState = [
]

export default function filterSkills(state = initialState, action) {
    if (action.type === 'FIND_SKILL') {
        return action.payload;
    }
    return state;
}