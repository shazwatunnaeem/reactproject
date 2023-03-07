import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactCard } from './components/ContactCard/ContactCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { useSelector,  useDispatch } from "react-redux";



function App() {
  // const [form, setForm] = useState(null);
  // const [user, setUser] = useState([]);

  const { deleteId, form, user } = useSelector((state) => ({
    deleteId: state.appReducer.deleteId,
    form: state.contactFormReducer.form,
    user: state.appReducer.user
  }));
  const dispatch = useDispatch();

  useEffect( () => {
    console.log("executed only once!");
    async function fetchData() {
      fetch("https://dummyjson.com/users?limit=10&select=id,firstName,lastName,email,gender,phone")
        .then((response) => response.json())
        .then((data) => {
          
          console.log(data["users"]);
          dispatch({ type: "api-call", payload: data["users"]})
          // setUser(data["users"]);
          //console.log(user);
        })
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (form != null) {
      dispatch({ type: "add-contact", payload: [form, ...user]})
      // setUser([form, ...user]);
      console.log([form, ...user]);
    }
    
  }, [form]);

  useEffect(() => {
    // if (form != null) {
    //   dispatch({ type: "add-contact", payload: [form, ...user]})
    //   // setUser([form, ...user]);
    //   console.log("delete id");
    //   console.log([form, ...user]);
    // }
    if(deleteId !=null){
      dispatch({ type: "delete", payload: deleteId});
      console.log("deleted");
      console.log(deleteId);

    }    
  }, [deleteId]);

  return (
   
      <div className="App">
      <NavBar />
      <Row className="justify-content-md-center">
        <Col xs lg="4"> <ContactForm /> </Col>
        <Col xs lg="4" className="m-5">
          <Form.Group className="my-3 mx-5">
            <Form.Control type="text" placeholder="Filter Contacts..." />
          </Form.Group>
          {user.map((key, index) => (
            <ContactCard key={index} id = {index} form={key} />
          ))}
        </Col>
      </Row>
    </div>
   
  );
}

export default App;
