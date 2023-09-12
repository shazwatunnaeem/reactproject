const initalState = {
    deleteId: null,
    user: [],
    logIn: false
};

export function appReducer(state = initalState, action) {
    switch (action.type) {
        case "API-CALL":
            return { ...state, user: action.payload };
        case "LOGIN":
            return { ...state, logIn: !state.logIn };
        case "DELETE-ID":
            return { ...state, deleteId: action.payload };
        case "DELETE":
            return {
                ...state, user: state.user.filter(users => {
                    return users.id !== Number(action.payload)
                })
            };
        case "ADD":
            return { ...state, user: action.payload };
        case "EDITED":
            const index = state.user.findIndex(u => u.id === action.payload.id);
            const newArray = [...state.user];
            newArray[index].firstName = action.payload.firstName;
            newArray[index].lastName = action.payload.lastName;
            newArray[index].email = action.payload.email;
            newArray[index].phone = action.payload.phone;
            newArray[index].gender = action.payload.gender;
            return {
                ...state,
                user: newArray,
            }
        default:
            return state;
    }
}