import React from 'react';

import PropTypes from 'prop-types'

import Item from './item.js';

let styles = {
  continents: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row',
   width: 400,
   flexWrap: 'wrap'
  },
  countries: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cities: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    borderColor: 'gray',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
};

export default class ContinentList extends React.Component {
  constructor(props) {  
      super(props);
  }

  render(){    

      var continentList = this.props.continents;

//filter continents
      var continents = [];
      continents = continentList.map((continent, index) => {
        return(
          <Item key={"Continent" + index} id={"Continent" + index} name={continent.name} highlight={continent.countries.some(country => country.cities.some(city => city.select === 1))} toggleContinent={this.props.toggleContinent} />
          );
      })    

//filter countries and cities
      var countries = [];
      var cities = [];

      var selectedContinent = continentList.filter(continent => continent.select ===1);
      if(selectedContinent.length === 1){
        countries = selectedContinent[0].countries.map((country, index) => {
          return(
            <Item key={"Country" + index} id={"Country" + index} name={country.name} highlight={country.cities.some(city => city.select === 1)} toggleCountry={this.props.toggleCountry} />
            );
        })

        var selectedCountries =  selectedContinent[0].countries.filter(country => country.select === 1);       
        if(selectedCountries.length === 1){
          cities = selectedCountries[0].cities.map((city, index) => {
            
          return(
            <Item key={"City" + index} id={"City" + index} name={city.name} highlight={city.select} toggleCity={this.props.toggleCity} />
            );
          });        
        }

      }

      return(
          <React.Fragment>
              {cities}
              {countries}
              {continents}
          </React.Fragment>
      );        
    }  
}

ContinentList.propTypes = {
  continents: PropTypes.arrayOf(
    PropTypes.shape({
      select: PropTypes.Number,
      name: PropTypes.string,
      countries: PropTypes.array,
      cities: PropTypes.array
    })
  ),
  toggleContinent: PropTypes.func,
  toggleCountry: PropTypes.func,
  toggleCity: PropTypes.func,
};
