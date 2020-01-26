import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';

class signalementClub extends Component {

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
    <i className="fa fa-align-justify"></i><strong>List Group</strong>
    <small> tags</small>
  </CardHeader>
  <CardBody>
    <ListGroup>
      <ListGroupItem className="justify-content-between" tag="a" href="#" action>Cras justo odio <Badge className="float-right" pill>14</Badge></ListGroupItem>
      <ListGroupItem className="justify-content-between"tag="a" href="#" action>Dapibus ac facilisis in <Badge className="float-right" pill>2</Badge></ListGroupItem>
      <ListGroupItem className="justify-content-between" tag="a" href="#" action>Morbi leo risus <Badge className="float-right" pill
  color="warning">1</Badge></ListGroupItem>
    </ListGroup>
  </CardBody>
</Card>
</Col>
    </Row>
      </div>
    );
  }
}

export default signalementClub;



