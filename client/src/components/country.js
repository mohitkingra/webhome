import React from 'react';

import PropTypes from 'prop-types'

import Item from './item.js';

let styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  states: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 350,
    marginLeft: 18,
  },
  cities: {
    display: 'flex',
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 18,
  },
  button: {
    borderColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
};

export default class CountryList extends React.Component {
  constructor(props) {  
      super(props);
  }

  render(){    

      var stateList = this.props.states;

//filter continents
      var states = [];
      states = stateList.map((state, index) => {
        return(
          <Item key={"State" + index} id={"State" + index} name={state.name} highlight={state.cities.some(city => city.select === 1)} toggleState={this.props.toggleState} />
          );
      })    

//filter cities
      var cities = [];

      var selectedState = stateList.filter(state => state.select ===1);
      if(selectedState.length === 1){
        cities = selectedState[0].cities.map((city, index) => {
          return(
            <Item key={"Ciity" + index} id={"Ciity" + index} name={city.name} highlight={city.select} toggleCiity={this.props.toggleCiity} />
            );
        })
      }

      return(
          <div style={styles.container}>
              <div style={styles.states}>
                {states}
              </div>
              <div style={styles.cities}>
                {cities}
              </div>
          </div>
      );        
    }  
}

CountryList.propTypes = {
  states: PropTypes.arrayOf(
    PropTypes.shape({
      select: PropTypes.Number,
      name: PropTypes.string,
      cities: PropTypes.array
    })
  ),
  toggleState: PropTypes.func,
  toggleCiity: PropTypes.func,
};
