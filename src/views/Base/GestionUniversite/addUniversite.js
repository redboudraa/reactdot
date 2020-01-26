import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {Badge,Card,CardBody,CardFooter,CardHeader,Collapse,DropdownItem,DropdownMenu,DropdownToggle,Fade,FormGroup,FormText,FormFeedback,Input,InputGroup,InputGroupAddon,InputGroupButtonDropdown,InputGroupText,Label,
} from 'reactstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import FileBase64 from"../base64"

export class AddUnivModal extends Component{

    constructor(props){
          super(props);

          this.state = {snackbaropen: false, snackbarmsg: '',    files: []};
          this.handleSubmit = this.handleSubmit.bind(this);
  
    }



// Callback~
getFiles(files){
this.setState({ files: files })
console.log(files)
}

    snackbarClose = (event) =>{
      this.setState({snackbaropen:false});
    };
    
    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:5001/api/event',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            Id:null,
            Title: event.target.Title.value,
            startDate: event.target.startDate.value,
            endDate: event.target.endDate.value,
            Place: event.target.Place.value,
            Description: event.target.Description.value,
            
          })
        })
        .then(res=> res.json())
        .then((result)=>
        {
            //alert(result);
            this.setState({snackbaropen:true, snackbarmsg:result});
        },
        (error)=>{
          //alert('Failed')
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
            <Modal.Title id="contained-modal-title-vcenter">Ajouter université</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
            <Row>
              <Col xs="12" sm={6}>
                <Form onSubmit={this.handleSubmit}>
              
                    <Form.Group controlId="Title">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                      type="text"
                      name="Title"
                      required
                      placeholder="Event Name"
                    />
                    </Form.Group>

                    <Form.Group controlId="startDate">
                    <Form.Label>Date début</Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      required
                      placeholder="Date de début"
                    />
                    </Form.Group>

                    <Form.Group controlId="endDate">
                    <Form.Label>Date fin</Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      required
                      placeholder="Date de fin"
                    />
                    </Form.Group>

                    <Form.Group controlId="Place">
                    <Form.Label>Lieu</Form.Label>
                    <Form.Control
                      type="text"
                      name="Place"
                      required
                      placeholder="Event Location"
                    />
                    </Form.Group>

                    <Form.Group controlId="Description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="3" 
                        name="Description"
                        placeholder="Description" />
                    </Form.Group>
                    <FileBase64 
hidden={false}
        multiple={ false }
        onDone={ this.getFiles.bind(this) } />
        <a>test </a>
        <img src={this.state.files.base64}/>  
                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                        Add Univ
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