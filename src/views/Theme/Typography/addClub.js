import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {Badge,Card,CardBody,CardFooter,CardHeader,Collapse,DropdownItem,DropdownMenu,DropdownToggle,Fade,FormGroup,FormText,FormFeedback,Input,InputGroup,InputGroupAddon,InputGroupButtonDropdown,InputGroupText,Label,
} from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


export class AddClubModal extends Component{

    constructor(props){
          super(props);

          this.state = {snackbaropen: false, snackbarmsg: ''};
          this.handleSubmit = this.handleSubmit.bind(this);
  
    }

    snackbarClose = (club) =>{
      this.setState({snackbaropen:false});
    };
    
    handleSubmit(club){
        club.preventDefault();
        fetch('/api/club',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            id:null,
            Name: club.target.Name.value,
            email: club.target.Email.value,
            phone: club.target.Phone.value,
            description: club.target.Description.value,
            password: club.target.Password.value,
            logo: club.target.Logo.value,
            
          })
        })
        .then(res=> res.json())
        .then((result)=>
        {
            alert(result);
        },
        (error)=>{
          alert('Failed')
          this.setState({snackbaropen:true, snackbarmsg:'failed'});
        })
    }
   
    render(){

      return(

        <div className="container">
            
            <Snackbar 
            anchorOrigin={{vertical:'bottom',horizontal:'center'}}
            open = {this.state.snackbaropen}
            autoHideDuration = {3000}
            onClose={this.snackbarClose}

            message = {<span id="message-id">{this.state.snackbarmsg}</span>}
            action={[
            <IconButton
            key="close"
            arial-label="Close"
            color="inherit"
            onClick={this.snackbarClose}
            >
              x
            </IconButton>
            ]}
            />

          <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Add Club</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <Row>
              <Col xs="12" sm={6}>
                <Form onSubmit={this.handleSubmit}>
              
                    <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="Name"
                      required
                      placeholder="club Name"
                    />
                    </Form.Group>

                    <Form.Group controlId="Email">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      name="Email"
                      required
                      placeholder="Email"
                    />
                    </Form.Group>

                    <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="Phone"
                      required
                      placeholder="Phone"
                    />
                    </Form.Group>

                    <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="textarea"
                      name="Description"
                      required
                      placeholder="Description"
                    />
                    </Form.Group>
                    
                    <Form.Group controlId="Password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                      
                        name="Password"
                        placeholder="password" />
                    </Form.Group>

                    <Form.Group controlId="Logo">
                      <Form.Label>Logo</Form.Label>
                      <Form.Control
                        type="textarea"
                        name="Logo"
                        placeholder="Logo" />
                    </Form.Group>
          
                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Add club
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
    </div>
      
      );
    }

}