const initialState = [
    {
        id: 1,
        name: 'Ivan Petrov',
        image: './data/user_image.svg',
        stars: 0,
        phone: "012345678",
        email: "name@nvidia.com",
        website: "website.com",
        skills: {
            Java: 100,
            C_plus_plus: 90,
            Bug_fixing: 70,
            python: 60
        },
        position: "Junior DL",
        isOpenToProjects: 1
    }
];

export default function users(state = initialState, action) {
    if (action.type === 'FETCH_IMAGE') {
        return action.payload;
    }
    else if (action.type === 'GET_IMAGE') {
        return state
    }
    return state;
}