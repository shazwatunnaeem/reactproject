const initalState = {
    fullname : '',
    firstName: '',
    lastName: '',
    email : '',
    phone : '',
    gender : 'male',
    cid: 100,
    form: null,
    editu: null,
    editFlag: false
   };
 
 export default function contactFormReducer(state=initalState, action) {
     switch (action.type) {
        case "SET_ID":
            return { ...state, cid: state.cid+1 };
        case "FORM TEXT DATA":
            return { ...state, [action.field]: action.payload };
        case "CLEAR":
            return { ...state, fullname: "", email: "", phone: "", gender: "male", firstName: "", lastName: ""};
        case "FORM RADIO BUTTON":
            return { ...state, gender: action.payload };
        case "EDIT":
            return { ...state, editu: action.payload };
        case "EDIT-FLAG":
            return { ...state, editFlag: action.payload };
        case "EDIT-DATA":
            return { ...state, fullname: action.payload.fullname, email: action.payload.email, phone: action.payload.phone, gender: action.payload.gender };
        default:
             return state;
     }
}