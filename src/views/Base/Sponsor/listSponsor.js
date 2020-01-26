import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

class listSponsor extends Component {

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
                <i className="fa fa-align-justify"></i><strong>Tous les sponsors</strong>
                
              </CardHeader>
              <CardBody>
                <p> <strong>La liste des sponsors</strong>.</p>
                <ListGroup>
                  <ListGroupItem active tag="a" href="#" action>Cras justo odio&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button >Poke</button></ListGroupItem>
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

export default listSponsor;
