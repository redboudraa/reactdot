import React, {Component} from 'react';
import './details.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as detailsActions from "../../store/details/actions";
export default class details extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-details">Hello! component details</div>;
    }
  }
// export default connect(
//     ({ details }) => ({ ...details }),
//     dispatch => bindActionCreators({ ...detailsActions }, dispatch)
//   )( details );