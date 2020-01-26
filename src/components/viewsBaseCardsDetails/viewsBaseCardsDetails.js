import React, {Component} from 'react';
import './viewsBaseCardsDetails.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as viewsBaseCardsDetailsActions from "../../store/viewsBaseCardsDetails/actions";
export default class viewsBaseCardsDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-views-base-cards-details">Hello! component viewsBaseCardsDetails</div>;
    }
  }
// export default connect(
//     ({ viewsBaseCardsDetails }) => ({ ...viewsBaseCardsDetails }),
//     dispatch => bindActionCreators({ ...viewsBaseCardsDetailsActions }, dispatch)
//   )( viewsBaseCardsDetails );