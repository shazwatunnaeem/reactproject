import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';
import { useState } from "react";
import { FormGroup } from 'reactstrap';

export function ContactForm(props) {

  const { onFormSubmit } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onOptionChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, phone, gender);
    onFormSubmit({
      email, name, phone, gender
    })
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit} className="m-5" width="50">
      <h3 style={{ color: "#084298" }} className="list-inline-item align-middle"> Cloud Contact </h3>
      <Form.Group className="my-3 mx-5" controlId="name">
        <Input type="text" placeholder="Name" name="name" value={name} onChange={handleNameChange} />
      </Form.Group>
      <Form.Group className="my-3 mx-5" controlId="email">
        <Input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      </Form.Group>
      <Form.Group className="my-3 mx-5" controlId="phone" >
        <Input type="phone" name="phonenumber" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
      </Form.Group>
      <FormGroup className="my-3 mx-5" style={{textAlign: "left"}}>
        <h5> Gender:</h5>
          <Form.Label class= "m-3" check="true">
            <Input
              name="male"
              type="radio" 
              value = "Male"
              checked={gender === "Male"}
              onChange={onOptionChange}
            />
            Male
          </Form.Label>
          <Form.Label check="true">
            <Input
              name="female"
              type="radio"
              value="Female"
              onChange={onOptionChange}
              checked={gender === "Female"}

            />
            Female
          </Form.Label>
      </FormGroup>
        


      <Button type="submit" style={{ backgroundColor: "#084298" }} size="lg" block="true">
        Add Contact
      </Button>
    </Form>
  );
}
