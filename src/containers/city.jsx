import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions'


class City extends Component { 

  render() {
    return(
      <li className="list-group-item">
        {this.props.city.name}
      </li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  )
}

export default connect(mapDispatchToProps)(City);