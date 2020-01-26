import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import {ButtonToolbar} from 'react-bootstrap';
class EventDetails extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
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
    console.log("hello", this.props.location.state); 
    return (
       
      <div className="animated fadeIn">
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
           
                  <Badge>{this.props.title} 
                  </Badge>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <ListGroup id="list-tab" role="tablist">
    <ListGroupItem onClick={() => this.toggle(0)} action active={this.state.activeTab === 0} >{this.props.name}</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(1)} action active={this.state.activeTab === 1} >Profile</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(2)} action active={this.state.activeTab === 2} >Messages</ListGroupItem>
                      <ListGroupItem onClick={() => this.toggle(3)} action active={this.state.activeTab === 3} >Settings</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col xs="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={0} >
                        <p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt
                          nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim
                          tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip
                          eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.</p>
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
      </div>
    );
  }
}

export default EventDetails;