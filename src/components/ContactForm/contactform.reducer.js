const initalState = {
    fullname : '',
    firstName: '',
    lastName: '',
    email : '',
    phone : '',
    gender : 'Male',
    cid: 100,
    form: null
   };
 
 export default function contactFormReducer(state=initalState, action) {
     switch (action.type) {
        case "SET_ID":
            return { ...state, cid: state.cid+1 };
        case "FORM TEXT DATA":
            return { ...state, [action.field]: action.payload };
        case "CLEAR":
            return { initalState };
        case "FORM RADIO BUTTON":
            return { ...state, gender: action.payload };
        case "SUBMIT":
            console.log(state);
            return { ...state, form: action.payload };
        case "EDIT":
            return { ...state, form: action.payload };
         default:
             return state;
     }
}