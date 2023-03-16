import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from './phone.png';
import email from './email.png';
import './ContactCard.css';
import person1 from './person1.png';
import { useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom';

export function ContactCard(props) {
    const { form } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const navigateToDetails = () => {
        navigate("/contactdetail/" + form.id + "/" + form.firstName+ " " + form.lastName + "/" + form.email + "/" + form.phone + "/" + form.gender);
      };

    const deleteContact = () => {
        console.log("delete");
        console.log(form.id);
        dispatch({ type: "DELETE-ID", payload: form.id})
        fetch('http://localhost:5000/users/'+form.id, {
        method: 'DELETE',
        })
        .then(res => res.json())
        .then(console.log);
    };

    const editContact = () => {
        console.log("edit");
        console.log(form.id);
        dispatch({ type: "EDIT-FLAG", payload: true});
        dispatch({ type: "EDIT", payload: form});
    };
   
    return (
        <div>
            <Card id= {props.id} className="crd mx-2 my-2">
                <CardBody className="m-2">
                    <Row>
                        <Col style={{ textAlign: "left" }}> 
                        <div onClick= {navigateToDetails}>
                            <CardTitle tag="h4" style={{ color: "#0c5d97" }}> {form.firstName+ " " + form.lastName} </CardTitle>
                            <CardText>
                            <CardImg className="crdimg"
                                src={email} alt="" />
                                 {form.email}
                            </CardText>
                            <CardText>
                                <CardImg className="crdimg" src={phone} alt="" />
                                 {form.phone}
                            </CardText>
                        </div>
                            <Button style={{ backgroundColor: "black" }} id= {form.id} onClick= {editContact} className="mx-2 mt-3"> Edit </Button>
                            <Button style={{ backgroundColor: "red" }} id= {form.id} onClick= {deleteContact} className="mt-3"> Delete </Button>
                        </Col>
                        <Col onClick= {navigateToDetails} style={{textAlign: "right"}}>
                            <Button style={{ backgroundColor: "black" }} className="mb-3" disabled> {form.gender} </Button> <br></br>
                            <CardImg className="contactimg" src={person1} alt="" />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}
