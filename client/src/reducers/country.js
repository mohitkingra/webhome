import { TOGGLE_STATE, TOGGLE_CIITY } from '../actions/country.js';

import { initialState } from './stateIndia.js';

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_STATE': {
      var visiblestates = state.states.map(state => {
        return state.name === action.name ? { ...state, select: state.select ^ 1} : { ...state, select: 0}
      });      

      return { ...state, states: visiblestates };
    }
    case 'TOGGLE_CIITY': {

      var visiblestates = state.states.map(state => {
        return state.select === 1 ? { ...state, cities : state.cities.map((city) => {
            return city.name === action.name ? { ...city, select: city.select ^ 1} : { ...city} })
        } : { ...state}
       }); 
      
      return { ...state, states: visiblestates};
    }
    default: {
      return state;
    }
  }
}
