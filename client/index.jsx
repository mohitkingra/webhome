import React, { Button, ImageBackground } from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import continentReducer from './src/reducers/index.js';
let store = createStore(combineReducers({continentReducer}));

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import countrydata from './../server/public/data/country.json';
import worlddata from './../server/public/data/world-110m.json';

let imgUrl = './../server/public/img/background.jpg';

import ContinentList  from './src/containers/continent.js';

let travelState = [];

let styles = {
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  root: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundImage: {
      flex:1,
      resizeMode: 'cover',
    }
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
};


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    store.subscribe(() => {
      
      travelState = store.getState().continentReducer.continents; 

    })  
  }

  componentWillUnmount(){
    store.unsubsribe();
  }

  render() {
    return (
      <ContinentList />
    );
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

ReactDOM.render(
    <App />,
    document.querySelector('.react-container')
);