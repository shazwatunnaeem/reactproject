const initalState = {
    deleteId: null,
    form: null,
    user: []
   };
 
 
 export function appReducer(state = initalState, action) {
     switch (action.type) {
        case "API-CALL":
            return { ...state, user: action.payload };
        case "DELETE-ID":
            return { ...state, deleteId: action.payload };     
        case "DELETE":
             return {  ...state, user: state.user.filter(users => {
                //console.log(users.id , Number(action.payload),users.id !== Number(action.payload));
                return users.id !== Number(action.payload)
            })};
        case "ADD":
            console.log("add state");
            console.log(state);
            return { ...state, user: action.payload };
         default:
             return state;
     }
   }