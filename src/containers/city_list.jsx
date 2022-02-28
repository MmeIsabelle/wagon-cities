import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from './city.jsx'

class CityList extends Component { 

  render() {
    return(
      <ul className="cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps) (CityList);