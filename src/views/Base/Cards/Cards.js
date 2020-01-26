import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Button from "@material-ui/core/Button";
import {ButtonToolbar} from 'react-bootstrap';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import EventIcon from "@material-ui/icons/Event";
import RoomIcon from "@material-ui/icons/Room";
import SchoolIcon from "@material-ui/icons/School";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import {InscriptionModal} from './inscriptionModal.js';
import {DetailModal} from './DetailModal.js';

import { Link } from 'react-router-dom';
class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
        events: [],
        isLoaded: false,
        addModalShow : false,
        detailModalShow: false
            }

    
  }

  componentDidMount() {

    fetch("/api/event")
        .then(res => res.json())
        .then(json => {
            this.setState({
                events: json,
                isLoaded: true, 
            })
        }).catch((err) => {
            console.log(err);
        });

}

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    //const classes = useStyles();
    let addModalClose =() => this.setState({addModalShow:false});
    let detailModalClose =() => this.setState({detailModalShow:false});
    const {event, eventid, eventtitle, eventdatedeb, eventdatefin, eventdescription, eventplace} = this.state;


    const { isLoaded, events } = this.state;
    if (!isLoaded)
    return <div>Loading...</div>;
    return (
      <div>
      <h2>La liste des événements</h2>
      <div style={{ marginTop: 20, padding: 30 }}>
        <div>
          <TextField
            style={{ padding: 24 }}
            id="searchInput"
            placeholder="title"
            value=""
            margin="normal"
              InputProps={{
              endAdornment: <SearchIcon />
            }}
          />

            <TextField
            style={{ padding: 24 }}
            id="searchInput"
            placeholder="title"
            value=""
            margin="normal"
              InputProps={{
              endAdornment: <SearchIcon />
            }}
          />

          <TextField
            style={{ padding: 24 }}
            id="searchInput"
            placeholder="title"
            value=""
            margin="normal"
              InputProps={{
              endAdornment: <SearchIcon />
            }}
          />
          </div>
          </div>
          
          
      <div className="animated fadeIn">

      
        <Row>
        {events.map((event) => (
          <Col xs="12" sm="6" md="4">
          <Card >
          <CardActionArea>
            <CardMedia
              
              title={event.title}
            ></CardMedia>
            
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                <EventIcon color="primary" fontSize="inherit" />
                {event.startDate} &nbsp;
                <EventIcon color="primary" fontSize="inherit" />
                {event.endDate} &nbsp;
                <RoomIcon color="primary" fontSize="inherit" />
                {event.place} <br />
                <SchoolIcon color="primary" fontSize="inherit" />
                &nbsp;Club
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {event.title}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="p">
               {event.description}
              </Typography>
            </CardContent>

          </CardActionArea>
          <CardActions>
          <ButtonToolbar>
                  <Button variant='primary' onClick={()=> this.setState({addModalShow: true,eventid:event.id})}  >S'inscrire </Button>  
                  <InscriptionModal show={this.state.addModalShow} onHide={addModalClose} eventid= {eventid}/>
                </ButtonToolbar>
                
           <ButtonToolbar> 
             <Button variant='primary' onClick={()=> this.setState({detailModalShow: true,eventid:event.id,
                  eventtitle:event.title,
                  eventdatedeb:event.startDate,
                  eventdatefin:event.endDate,
                  eventplace:event.place,
                  eventdescription:event.description })}  > Voir plus ... </Button>  
             <DetailModal show={this.state.detailModalShow}   
                  eventid= {eventid}
                  eventtitle= {eventtitle}
                  eventdatedeb= {eventdatedeb}
                  eventdatefin= {eventdatefin}
                  eventplace= {eventplace}
                  eventdescription= {eventdescription}
                  onHide={detailModalClose}/>
            </ButtonToolbar>   

           
          </CardActions>
        </Card>
        <br></br>
          </Col>
        
         ))}
         
          </Row>
        
       
          
      </div>
      </div>
    );
  }
}


export default Cards;
