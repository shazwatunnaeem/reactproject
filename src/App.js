import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactCard } from './components/ContactCard/ContactCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Login } from './components/Login';
import { ContactDetails } from './components/ContactDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardGroup } from 'react-bootstrap';
import { QueryComponent } from './components/reactquery';
import { useQuery } from '@tanstack/react-query';
import { SignUp } from './components/SignUp';

function App() {
  const { deleteId, user, logIn } = useSelector((state) => ({
    deleteId: state.appReducer.deleteId,
    user: state.appReducer.user,
    logIn: state.appReducer.logIn
  }));

  const dispatch = useDispatch();

  // const getFacts = async () => {
  //   const res = await fetch('https://dummyjson.com/users?limit=10&select=id,firstName,lastName,email,gender,phone');
  //   const udata = res.json();
  //   return udata;
  // };
  // const {data, error, isLoading} = useQuery({ queryKey: ['users'], queryFn: getFacts });
  // if (error) return <div>Request Failed</div>;
  // if (isLoading) return <div>Loading...</div>;

  useEffect(() => {
    //if (logIn) {
      console.log("executed only once!");
      async function fetchData() {
        fetch("http://localhost:5000/users",
          // {
          //   credentials: "include",
          // }
          )
          .then((response) => response.json())
          .then((data) => {

            console.log(data);
            dispatch({ type: "API-CALL", payload: data })
          })
          .catch((error) => {
            console.log(error)
          });
      }
      fetchData();
    //}
  }, []);

  useEffect(() => {
    if (deleteId != null) {
      dispatch({ type: "DELETE", payload: deleteId });
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
              <Row className="p-5 border d-flex justify-content-center" style={{ width: '700px' }}>
                <Col xs lg="7">
                  <Login />
                </Col>
              </Row>
            </div>
          } />
          <Route path="/signup" element={
            <div className='m-5 p-5 d-flex justify-content-center'>
              <Row className="p-5 border d-flex justify-content-center" style={{ width: '700px' }}>
                <Col xs lg="7">
                  <SignUp />
                </Col>
              </Row>
            </div>
          } />
          <Route path="/contactform" element={
            <Row className="justify-content-md-center">
              <Col xs lg="5"> <ContactForm /> </Col>
              <Col xs lg="5" className="m-5">
                <Form.Group className="mx-2 my-2">
                  <Form.Control type="text" placeholder="Filter Contacts..." />
                </Form.Group>
                <CardGroup>
                  {user?.map((key, index) => (
                    <ContactCard key={index} id={index} form={key} />
                  ))}
                </CardGroup>
              </Col>
            </Row>
          } />
          <Route path="/contactdetail/:id/:name/:email/:phone/:gender" element={
            <div className='m-5 p-5 d-flex justify-content-center'>
              <Row className="p-5 d-flex justify-content-center" style={{ width: '700px' }}>
                <Col xs lg="10">
                  <ContactDetails />
                </Col>
              </Row>
            </div>
          } />
          <Route path="/abc" element={
            <QueryComponent />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
