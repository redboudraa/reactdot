import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Button, ButtonToolbar} from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import ArrowForward from '@material-ui/icons/ArrowForward';
import EventDetails from '../Cards/eventDetails';
import {AddEcoleModal} from './addEcole';
import {EditEcoleModal} from './editEcole';

import { Link } from 'react-router-dom';

const Squirtle = {
  name: 'Squirtle',
  level: 5,
  hp: 20
}
class listEcole extends Component {
 
    constructor(props){
        super(props);
        
        this.state={
          event: [], addModalShow : false, editModalShow : false ,
          files: [],
        }
      }
      
    
    // Callback~
    getFiles(files){
      this.setState({ files: files })
      console.log(files)
    }
              componentDidMount()
              {
                const url ="/api/event";
                fetch(url, {
                  method : "GET"
                }).then(reponse=>reponse.json()).then(event=>{
                  console.log(event)
                  this.setState({event: event},)
                  
                  
                  })
    
                  //this.refreshList();
              }
    
             
    
              deleteEvent(id)
              {
                  if(window.confirm('Are you sure?'))
                  {
                      fetch('https://localhost:5001/api/event/'+id,{
                          method:'DELETE',
                          header:{'Accept':'application/json',
                          'Content-Type':'application/json'
                      }
                      })
                  }
              }
              
              
    
    
      render() {
        let editModalClose =() => this.setState({editModalShow:false});
        let addModalClose =() => this.setState({addModalShow:false});
        
        const {event, eventid, eventtitle, eventdatedeb, eventdatefin, eventdescription, eventplace} = this.state;
        const columns= [
          {
            Header: "ID Event",
            accessor: "id",
            sortable: "false",
            filterable:"false"
          },
    
          {
            Header: "Title Event",
            accessor: "title",
            sortable: "false",
            filterable:"false"
          },
    
          {
            Header: "Date début Event",
            accessor: "startDate",
            sortable: "false",
            filterable:"false"
          },
    
          {
            Header: "Date de fin Event",
            accessor: "endDate",
            sortable: "false",
            filterable:"false"
          },
    
          {
            Header: "Lieu Event",
            accessor: "place",
           
          },
    
          {
            Header: "Actions",
            Cell: row => (
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
         <Edit color="primary" 
           
            variant='primary' onClick={()=> this.setState({editModalShow: true,
                      eventid:row.original.id,
                      eventtitle:row.original.title,
                      eventdatedeb:row.original.startDate,
                      eventdatefin:row.original.endDate,
                      eventplace:row.original.place,
                      eventdescription:row.original.description }) }/>
                <EditEcoleModal
                
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      eventid= {eventid}
                      eventtitle= {eventtitle}
                      eventdatedeb= {eventdatedeb}
                      eventdatefin= {eventdatefin}
                      eventplace= {eventplace}
                      eventdescription= {eventdescription} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <DeleteForeverIcon color="secondary" variant='primary' onClick={() => this.deleteEvent(row.original.id)}/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                   <Link to="/eventDetails/">
                    <ArrowForward size="small"
                  color="primary"
                  href={event.url}
                  target="_blank">
                      <span>Voir plus </span>
                    
                    <EventDetails name={"Charmander"} level={5} hp={21} />
                  </ArrowForward>
                    </Link>
                     
              </div>
             )            
          }
        ]
       
        
        return (
               
         <div className="animated fadeIn">
           <Row>
              <Col>
                <Card>
                  <CardHeader>
                    <i className="fa fa-align-justify"></i> La liste des écoles
                  </CardHeader>
                  
                  <CardBody>
                    
                    <ButtonToolbar>
                      <Button variant='primary' onClick={()=> this.setState({addModalShow: true})}  >Ajouter école</Button>  
                      <AddEcoleModal show={this.state.addModalShow} onHide={addModalClose}/>
                    </ButtonToolbar>
                    
                    <br></br>
                                
                    <ReactTable columns={columns} data={this.state.event} defaultPageSize={5} hover bordered striped responsive size="sm">
                    </ReactTable>
              
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
    
        );
      }
    }
    
export default listEcole;
