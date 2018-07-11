import { createStore, combineReducers } from 'redux';
import continentReducer from './world.js';
import countryReducer from './country.js';

let store = createStore(combineReducers({continentReducer, countryReducer}));
export default store;