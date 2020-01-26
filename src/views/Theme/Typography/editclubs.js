import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {Badge,Card,CardBody,CardFooter,CardHeader,Collapse,DropdownItem,DropdownMenu,DropdownToggle,Fade,FormGroup,FormText,FormFeedback,Input,InputGroup,InputGroupAddon,InputGroupButtonDropdown,InputGroupText,Label,
} from 'reactstrap';


export class EditClubModal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(club){
      console.log("yoooo")
    club.preventDefault();
    fetch('/api/club/'+club.target.id.value,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
            id: club.target.id.value,
            Name: club.target.Name.value,
            Email: club.target.Email.value,
            Phone: club.target.Phone.value,
            Description: club.target.Description.value,
            Password: club.target.Password.value,
            Logo: club.target.Logo.value,
      })
    })
    
  }  
    render(){
        return(
            <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Modifier club</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row>
               <Col xs="12" sm={6}>
                <Form onSubmit={this.handleSubmit}>
              
                  <Form.Group controlId="id">
                  <Form.Label>ClubID</Form.Label>
                  <Form.Control
                    type="text"
                    name="id"
                    disabled
                    defaultValue={this.props.clubid}
                    placeholder="id"
                  />
                  </Form.Group>

                  <Form.Group controlId="Name">
                  <Form.Label>Club name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Name"
                    required
                    defaultValue={this.props.clubname}
                    placeholder="Club Name"
                  />
                  </Form.Group>

                  <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="Email"
                    required
                    defaultValue={this.props.clubemail}
                    placeholder="email"
                  />
                  </Form.Group>

                  <Form.Group controlId="Phone">
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="Phone"
                    required
                    defaultValue={this.props.clubphone}
                    placeholder="phone"
                  />
                  </Form.Group>
        
                  <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" name="Description"
                    defaultValue={this.props.clubdescription}
                    placeholder="description" />
                  </Form.Group>

                  <Form.Group controlId="Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="Password"
                    required
                    defaultValue={this.props.password}
                    placeholder="mot de passe"
                  />
                  </Form.Group>

                  <Form.Group controlId="Logo">
                  <Form.Label>Logo</Form.Label>
                  <Form.Control
                    type="text"
                    name="Logo"
                    required
                    defaultValue={this.props.clublogo}
                    placeholder="logo"
                  />
                  </Form.Group>

                  <Form.Group>
                      <Button variant="primary" type="submit">
                      Edit
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