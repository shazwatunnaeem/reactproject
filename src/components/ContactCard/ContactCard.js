import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phone from './phone.png';
import email from './email.png';
import './ContactForm.css'
// import person1 from './person1.png';

export function ContactCard() {

    return (
        <div>
            <Card className="mx-5 my-3">
                <CardBody className= "m-2">
                <Row>
                    <Col style={{ textAlign: "left" }}> <CardTitle tag= "h4" style={{color: "#0c5d97"}}> Name </CardTitle>
                            <CardImg className="crdimg"
                                src={email} alt="Card image cap" />
                            <CardText inline> email@example.com </CardText>
                            <CardImg width="20" height='19' src={phone} alt="Card image cap" />
                            <CardText inline> phone </CardText>

                            <Button style={{backgroundColor: "black"}} className="mx-2"> Edit </Button> 
                            <Button style={{backgroundColor: "red"}} > Delete </Button>
                        
                    </Col>
                    <Col>  
                    <CardImg top width="100%" src="" alt="Card image cap" />

                    </Col>
                </Row>
                </CardBody>
            </Card>
        </div>
    );
  }
    