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
    flexWrap: 'wrap'
  },
  continents: {
    display: 'flex',
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 500,
    marginLeft: 18,
    marginTop: 18,
  },
  countries: {
    display: 'flex',
    flex:'1 1 40%',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 500,
    marginLeft: 18,
    marginTop: 18,
  },
  countriesDefault: {
    display: 'flex',
    flex:'1 1 40%',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 400,
    marginLeft: 18,
    marginTop: 18,
  },
  cities: {
    display: 'flex',
    flex:'1 1 10%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin :18,
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
          <div style={styles.container}>
              <div style={styles.continents}>
                {continents}
              </div>
              <div style={countries.length > 25 ? styles.countries : styles.countriesDefault} >
                {countries}
              </div>
              <div style={styles.cities}>
                {cities}
              </div>
          </div>
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
