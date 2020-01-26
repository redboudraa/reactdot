import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap';
import {Modal,Button, Form} from 'react-bootstrap';

export class InscriptionModal extends Component{
    constructor(props) {
    super(props);
    }


     handleSubmit(event){
      
      event.preventDefault();
    fetch('/api/event/inscription/'+event.target.id.value,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
            id: event.target.id.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
             cin:  event.target.cin.value,
             age:  event.target.age.value      
      })
    })
    };
 
    
 


  
  

  render() {
    console.log("hellooooooo",this.props.eventid)
    return (
      <div className="animated fadeIn">

          <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">s'inscrire à  un événement</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
          
        <Row>
        <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Company</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="id">
                  <Form.Label>EventID</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    disabled
                    defaultValue={this.props.eventid}
                    placeholder="id"
                  />
                  
                  </Form.Group>
 
              <Form.Group controlId=" firstName   ">
                  <Form.Label>FirstName</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                  />
                  
                  </Form.Group>
                  <Form.Group controlId="lastName">
                  <Form.Label>lastName</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                  />
                  
                  </Form.Group>

                  <Form.Group controlId="age">
                  <Form.Label>age</Form.Label>
                  <Form.Control
                    type="text"
                    name="age"
                    placeholder="age"
                  />
                  </Form.Group>
                <Form.Group controlId="cin">
                  <Form.Label>cin</Form.Label>
                  <Form.Control
                    type="text"
                    name="cin"
                    placeholder="cin"
                  />

               </Form.Group>
               <Form.Group>
                      <Button variant="primary" onClick={this.props.onHide} type="submit">
                      S'inscrire
                      </Button>
                  </Form.Group>
                </Form>
              </CardBody>
            </Card>
            
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        

          </Modal>
      </div>
    );
  }
}

export default InscriptionModal;
