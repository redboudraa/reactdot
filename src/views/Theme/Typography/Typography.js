import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Button, ButtonToolbar} from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import {EditClubModal} from './editclubs';


import {AddClubModal} from './addClub';



class Typography extends Component {
 
  constructor(props){
    super(props);
    
    this.state={
      club: [], addModalShow : false, editModalShow : false 
    }
  }
  
   

          componentDidMount()
          {
            const url ="/api/club";
            fetch(url, {
              method : "GET"
              
            }).then(reponse=>reponse.json()).then(club=>{
              console.log(club)
              this.setState({club: club},) 
              })
              //window.location.reload(false);
              //this.refreshList();
          }
  
          deleteEvent(id)
          {
              if(window.confirm('Are you sure?'))
              {
                  fetch('/api/club/'+id,{
                      method:'DELETE',
                      header:{'Accept':'application/json',
                      'Content-Type':'application/json'
                  }
                  })
              }
          }
  

          
  render() {
    let addModalClose =() => this.setState({addModalShow:false});
    let editModalClose =() => this.setState({editModalShow:false});
    
    const {club, clubid, clubname, clubemail, clubphone, clubdescription,clubpassword, clublogo} = this.state;
    const columns= [
      {
        Header: "ID club",
        accessor: "id",
        sortable: "false",
        filterable:"false"
      },

      {
        Header: "Name club",
        accessor: "Name",
        sortable: "false",
        filterable:"false"
      },

      {
        Header: "Email ",
        accessor: "email",
        sortable: "false",
        filterable:"false"
      },

      {
        Header: "Phone",
        accessor: "phone",
        sortable: "false",
        filterable:"false"
      },

      {
        Header: "Description",
        accessor: "description",
       
      },
      {
        Header: "Password",
        accessor: "password",
       
      },
      {
        Header: "Logo",
        accessor: "logo",
       
      },

      {
        Header: "Actions",
        Cell: row => (
          <div>
         <Edit color="primary" 
       
                variant='primary' onClick={()=> this.setState({editModalShow: true,
                 clubid:row.original.id,
                 clubname:row.original.Name,
                 clubemail:row.original.email,
                 clubphone:row.original.phone,
                 clubdescription:row.original.description,
                 clubpassword:row.original.passowrd,
                 clublogo:row.original.logo }) }/>

           <EditClubModal
                 show={this.state.editModalShow}
                 onHide={editModalClose}
                 clubid= {clubid}
                 clubname= {clubname}
                 clubemail= {clubemail}
                 clubphone= {clubphone}
                 clubdescription= {clubdescription}
                 clubpassword= {clubpassword}
                 clublogo= {clublogo} />
               
           <DeleteForeverIcon color="secondary" variant='primary' onClick={() => this.deleteEvent(row.original.id)}/>


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
                <i className="fa fa-align-justify"></i> La liste des clubs
              </CardHeader>
              
              <CardBody>
                
                <ButtonToolbar>
                  <Button variant='primary' onClick={()=> this.setState({addModalShow: true})}  >Ajouter club </Button>  
                  <AddClubModal show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>
                
                <br></br>
                            
                <ReactTable columns={columns} data={this.state.club} defaultPageSize={5} hover bordered striped responsive size="sm">
                </ReactTable>
          
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Typography;
