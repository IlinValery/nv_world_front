const initialState = [
    {
        name: "Middle C++",
        id: 1
    },
    {
        name: "Deep Learning",
        id: 2
    },
    {
        name: "BackEnd",
        id: 3
    },
    {
        name: "FrontEnd",
        id: 4
    },
    {
        name: "BugFixer",
        id: 5
    }
]

export default function filterSkills(state = initialState, action) {
    if (action.type === 'FIND_SKILL') {
        return action.payload;
    }
    return state;
}