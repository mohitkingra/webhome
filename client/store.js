import { createStore, combineReducers } from 'redux';

import continentReducer from './src/reducers/indexWorld.js';
import countryReducer from './src/reducers/indexCountry.js';

let store = createStore(combineReducers({continentReducer, countryReducer}));

export default store;