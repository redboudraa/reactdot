import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

class candidatsInscrit extends Component {

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
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Nom Event</strong>
                
              </CardHeader>
              <CardBody>
                <p> <strong>La liste des étudiants inscrits</strong>.</p>
                <ListGroup>
                  <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <p />
              </CardBody>
            </Card>
          </Col>
    </Row>
      </div>
    );
  }
}

export default candidatsInscrit;
