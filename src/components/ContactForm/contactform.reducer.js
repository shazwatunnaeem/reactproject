const initalState = {
    fullname : '',
    firstName: '',
    lastName: '',
    email : '',
    phone : '',
    gender : 'Male',
    form: null
   };
 
 export default function contactFormReducer(state=initalState, action) {
     switch (action.type) {
        case "FORM TEXT DATA":
            return { ...state, [action.field]: action.payload };
        case "FORM RADIO BUTTON":
            return { ...state, gender: action.payload };
        case "Submit":
            console.log(state);
            return { ...state, form: action.payload };
         default:
             return state;
     }
}