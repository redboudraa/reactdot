import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
import {ButtonToolbar} from 'react-bootstrap';
import {Modal,Button, Form} from 'react-bootstrap';

export class DetailModal extends Component{
    constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }


 
  render() {
    
    console.log("ha mout arr7ai",this.props);
    return (
       
      <div className="animated fadeIn">
        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">s'inscrire à  un événement</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>List Group</strong> <small>with TabPanes</small>
                <div className="card-header-actions">
                <ButtonToolbar>
                <Link to="/candidatsInscrit">
                <Button size="small"
              color="primary"
              href="#"
              target="_blank">
                  <span>Nombre d'inscriptions</span>
                </Button>
               </Link>
                </ButtonToolbar>
           
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist">
                <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >details</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >Profile</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Messages</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >Settings</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab} >
                      <TabPane tabId={0} >
                        
                        <p>{this.props.eventdescription}</p>
                      </TabPane>
                      <TabPane tabId={1}>
                        <p></p>
                      </TabPane>
                      <TabPane tabId={2}>
                        <p></p>
                      </TabPane>
                      <TabPane tabId={3}>
                        <p></p>
                      </TabPane>
                    
                    </TabContent>
                  </Col>
                </Row>
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
