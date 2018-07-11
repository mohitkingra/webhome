import { TOGGLE_CONTINENT, TOGGLE_COUNTRY, TOGGLE_CITY } from '../actions/world.js';

import { initialState } from './stateWorld.js';

export default function continentReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CONTINENT': {
      var visiblecontinents = state.continents.map(continent => {
        return continent.name === action.name ? { ...continent, select: continent.select ^ 1} : { ...continent, select: 0}
      });      

      return { ...state, continents: visiblecontinents };
    }
    case 'TOGGLE_COUNTRY': {

      var visiblecontinents = state.continents.map(continent => {
        return continent.select === 1 ? { ...continent, countries : continent.countries.map((country) => {
            return country.name === action.name ? { ...country, select: country.select ^ 1} : { ...country, select: 0} })
        } : { ...continent}
       }); 
      
      return { ...state, continents: visiblecontinents};
    }
    case 'TOGGLE_CITY': {
      var visiblecontinents = state.continents.map(continent => {
        return continent.select === 1 ? { ...continent, countries : continent.countries.map((country) => {
          return country.select === 1 ? { ...country, cities: country.cities.map((city) => {
            return city.name === action.name ? { ...city, select: city.select ^ 1} : { ...city}
          })} : { ...country, select: 0}
        })} : { ...continent, select: 0}
      });

      return { ...state, continents: visiblecontinents};
    }
    default: {
      return state;
    }
  }
}
