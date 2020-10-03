var mockApiData = [
    {
        id: 2,
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
        }
    }
];

export const getImage  = () => dispatch => {
    setTimeout(() => {
        console.log("reached the user image");
        dispatch({ type: 'FETCH_IMAGE', payload: mockApiData });
    }, 0)
}