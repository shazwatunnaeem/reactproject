import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Input } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FormGroup } from 'reactstrap';

export function ContactForm() {

  const { fullname, email, phone, gender, cid, editu, user, editFlag } = useSelector((state) => ({
    fullname: state.contactFormReducer.fullname,
    email: state.contactFormReducer.email,
    phone: state.contactFormReducer.phone,
    gender: state.contactFormReducer.gender,
    cid: state.contactFormReducer.cid,
    editu: state.contactFormReducer.editu,
    user: state.appReducer.user,
    editFlag: state.contactFormReducer.editFlag
  }));

  useEffect(() => {
    if (editFlag === true) {
      console.log("edited", editu.gender);
      dispatch({
        type: "EDIT-DATA",
        payload: {
          fullname: editu.firstName + " " + editu.lastName,
          email: editu.email,
          phone: editu.phone,
          gender: editu.gender
        },
      })
    }
  }, [editu]);

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

  const handleEdit = (e) => {
    //console.log("edit id ", editu);
    dispatch({ type: "EDIT-FLAG", payload: false });
    const cname = fullname.split(/ (.*)/);
    dispatch({
      type: "EDITED", payload: {
        id: editu.id,
        firstName: cname[0],
        lastName: cname[1],
        email: email,
        phone: phone,
        gender: gender
      }
    });

    console.log("edit ", JSON.stringify({
      id: editu.id,
      firstName: cname[0],
      lastName: cname[1],
      email: email,
      phone: phone,
      gender: gender
    }));

    fetch(`http://localhost:5000/users/${editu.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        id: editu.id,
        firstName: cname[0],
        lastName: cname[1],
        email: email,
        phone: phone,
        gender: gender
      })
    })
      .then(res => res.json())
      .then("edit api", console.log)
      .catch(err => console.log(err));

    dispatch({ type: "CLEAR" });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const cname = fullname.split(/ (.*)/);
    dispatch({ type: "SET_ID" });
    dispatch({
      type: "ADD",
      payload: [...user, {
        id: cid,
        firstName: cname[0],
        lastName: cname[1],
        email: email,
        phone: phone,
        gender: gender
      },
      ]
    });

    fetch('http://localhost:5000/users/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        id: cid,
        firstName: cname[0],
        lastName: cname[1],
        email: email,
        phone: phone,
        gender: gender
      })
    })
      .then(res => res.json())
      .then(console.log)
      .catch(err => console.log(err));
    dispatch({ type: "CLEAR" });
  };

  return (
    <Form className="m-5" width="50">
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
      <FormGroup className="my-3 mx-5" style={{ textAlign: "left" }}>
        <h5> Gender:</h5>
        <Form.Label className="m-3">
          <Input
            name="male"
            type="radio"
            value="male"
            checked={gender === "male"}
            onChange={onOptionChange}
          />
          Male
        </Form.Label>
        <Form.Label>
          <Input
            name="female"
            type="radio"
            value="female"
            onChange={onOptionChange}
            checked={gender === "female"}
          />
          Female
        </Form.Label>
      </FormGroup>
      <Button onClick={handleSubmit} style={{ backgroundColor: "#084298" }} size="lg" block="true" disabled={editFlag}>
        Add Contact
      </Button>
      <Button className="mx-2" onClick={handleEdit} style={{ backgroundColor: "#084298" }} size="lg" block="true" disabled={!editFlag}>
        Edit Contact
      </Button>
    </Form>
  );
}
