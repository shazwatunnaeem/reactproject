import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactCard } from './components/ContactCard/ContactCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Row>
        <Col> <ContactForm /> </Col>
        <Col className="m-5"> 
          <Form.Group className="my-3 mx-5">
            <Form.Control type="text" placeholder="Filter Contacts..." />
          </Form.Group>
          <ContactCard /> 
          <ContactCard />
        </Col>
      </Row>
      
    </div>
  );
}

export default App;
