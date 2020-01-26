import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {Badge,Card,CardBody,CardFooter,CardHeader,Collapse,DropdownItem,DropdownMenu,DropdownToggle,Fade,FormGroup,FormText,FormFeedback,Input,InputGroup,InputGroupAddon,InputGroupButtonDropdown,InputGroupText,Label,
} from 'reactstrap';


export class EditEcoleModal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
    event.preventDefault();
    fetch('/api/event/5e170b1647f5d13a2c8f324b',{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
            id: event.target.id.value,
            Title: event.target.Title.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            Place: event.target.Place.value,
            Description: event.target.Description.value
        
      })
    })
    
  } 
   
    render(){
        return(
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Modifier école</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row>
              
               <Col xs="12" sm={6}>
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

                  <Form.Group controlId="Title">
                  <Form.Label>Event name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Title"
                    required
                    defaultValue={this.props.eventtitle}
                    placeholder="Event Name"
                  />
                  </Form.Group>

                  <Form.Group controlId="startDate">
                  <Form.Label>Date de début</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    required
                    defaultValue={this.props.eventdatedeb}
                    placeholder="Date de début"
                  />
                  </Form.Group>

                  <Form.Group controlId="endDate">
                  <Form.Label>Date de fin</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    required
                    defaultValue={this.props.eventdatefin}
                    placeholder="Date de fin"
                  />
                  </Form.Group>

                  <Form.Group controlId="Place">
                  <Form.Label>Localisation</Form.Label>
                  <Form.Control
                    type="text"
                    name="Place"
                    required
                    defaultValue={this.props.eventplace}
                    placeholder="Event Location"
                  />
                  </Form.Group>
        
                  <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" name="Description"
                    defaultValue={this.props.eventdescription}
                    placeholder="Description" />
                  </Form.Group>

                  <Form.Group>
                      <Button variant="primary" type="submit" onClick={this.props.onHide}>
                      Edit Ecole
                      </Button>
                  </Form.Group>

              </Form>
             </Col>
           </Row>
 
        </Modal.Body>
 
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
 
      </Modal>

        );
    }

}