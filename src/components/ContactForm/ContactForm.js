import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';
import { useReducer, useState } from "react";
import { useSelector,  useDispatch } from "react-redux";
import { FormGroup } from 'reactstrap';
import contactFormReducer from './contactform.reducer';

export function ContactForm(props) {

   const { fullname, email, phone, gender, cid} = useSelector((state) => ({
    fullname: state.contactFormReducer.fullname,
    email: state.contactFormReducer.email,
    phone: state.contactFormReducer.phone,
    gender: state.contactFormReducer.gender,
    cid: state.contactFormReducer.cid
  }));

  const dispatch = useDispatch();
  const handleTextChange = (e) => {
     dispatch({
      type: "FORM TEXT DATA",
      field: e.target.name,
      payload: e.target.value,
     })
  };

  const onOptionChange = (e) => {
    dispatch({
      type: "FORM RADIO BUTTON", 
      payload: e.target.value,
     })
  };

  const handleSubmit = (event) => {
      event.preventDefault()
      const cname = fullname.split(' ');
      dispatch({type: "SET_ID"})
      dispatch({
        type: "Submit", 
        payload: {id: cid,
        firstName: cname[0],
        lastName: cname[1],
        email : email,
        phone : phone,
        gender : gender},
       })
  };

  return (
    <Form onSubmit={handleSubmit} className="m-5" width="50">
      <h3 style={{ color: "#084298" }} className="list-inline-item align-middle"> Cloud Contact </h3>
      <Form.Group className="my-3 mx-5" controlId="name">
        <Input type="text" placeholder="Name" name="fullname" value={fullname} onChange={handleTextChange} />
      </Form.Group>
      <Form.Group className="my-3 mx-5" controlId="email">
        <Input type="email" name="email" placeholder="Email" value={email} onChange={handleTextChange} />
      </Form.Group>
      <Form.Group className="my-3 mx-5" controlId="phone" >
        <Input type="phone" name="phone" placeholder="Phone" value={phone} onChange={handleTextChange} />
      </Form.Group>
      <FormGroup className="my-3 mx-5" style={{textAlign: "left"}}>
        <h5> Gender:</h5>
          <Form.Label className= "m-3" check="true">
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
