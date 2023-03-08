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
import { Login } from './components/Login';
import { ContactDetails } from './components/ContactDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
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
          dispatch({ type: "API-CALL", payload: data["users"]})
        })
        .catch((error) => {
          console.log(error)
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (form != null) {
      dispatch({ type: "ADD", payload: [form, ...user]});
      console.log([form, ...user]);
    }
    
  }, [form]);

  useEffect(() => {
    if(deleteId !=null){
      dispatch({ type: "DELETE", payload: deleteId});
      console.log("deleted");
      console.log(deleteId);

    }    
  }, [deleteId]);

  return (
   
      <div className="App">
 

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div className='m-5 p-5 d-flex justify-content-center'>
            <Row className="p-5 border d-flex justify-content-center" style= {{width:'700px'}}>
              <Col xs lg="7">
                <Login />        
              </Col>       
            </Row>
          </div>
          } />
          <Route path="/contactform" element={
              <Row className="justify-content-md-center">
                <Col xs lg="4"> <ContactForm /> </Col>
                <Col xs lg="4" className="m-5">
                  <Form.Group className="my-3 mx-5">
                    <Form.Control type="text" placeholder="Filter Contacts..." />
                  </Form.Group>
                  {user?.map((key, index) => (
                    <ContactCard key={index} id = {index} form={key} />
                  ))}
                </Col>
              </Row>
          } />
          <Route path="/contactdetail/:id/:name/:email/:phone/:gender" element={
            <div className='m-5 p-5 d-flex justify-content-center'>
            <Row className="p-5 d-flex justify-content-center" style= {{width:'700px'}}>
              <Col xs lg="10">
                <ContactDetails />        
              </Col>       
            </Row>
          </div>
          } />
          {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
