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
    width:100,
    height:50,
  },
};

var travelState= [];

class WorldMap extends React.Component {
  constructor() {
      super()
      this.state ={
        worlddata: feature(worlddata, worlddata.objects.countries).features,
        traveldata: [],
        renderdata: [],
      }
    }
  
  projection() {
      return geoMercator()
        .scale(60)
        .translate([800/2, 450/2])
    }



  componentDidMount() {

      var arr = [];
      
      travelState.forEach((continent, index) => {
        continent.countries.forEach((country, index) => {

          //get selected countries name
          if(country.cities.some(city => city.select === 1)){
            //get country id from name
                
            countrydata.forEach((countryData, index) => {

              //update arr for matched countries
              if(country.name === countryData["name"] ){

                worlddata.objects.countries.geometries.forEach(function(geometry, index) {
 
                  if(geometry.id == countryData["country-code"]) {
 
                    // Update fillstyle
                    arr[index]=1;
                  }
 
                });
              }
            })
          }
        
        })
      })
      
      this.setState({
        traveldata: travelState,
        renderdata : arr,
      })

  }

  render() {
    return (
     <svg width={ 1200 } height={ 720 } viewBox="0 0 1280 720">
          <g className="countries">
            {
              this.state.worlddata.map((d,i) => (
                <path
                  className="country"
                  stroke="gray" 
                  strokeWidth="2"
                  fill={ this.state.renderdata[i] ? 'gray' : 'none' }
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                />
              ))
            }
          </g>
      </svg>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      map: false,
    }
  }
  
  componentDidMount(){
    store.subscribe(() => {
      
      travelState = store.getState().continentReducer.continents; 

    })  
  }

  componentWillUnmount(){
    store.unsubsribe();
  }

  onButtonPress = () => {
    this.setState({
      map: !this.state.map,
    })
  }

  render() {

    if(this.state.map){
      return(
        <div>
          <WorldMap />
          <button style={styles.button} onClick={this.onButtonPress}>Back!</button>
        </div>
      );
    }
    else {
      return(
        <div>
          <ContinentList />
          <button style={styles.button} onClick={this.onButtonPress}>See your travel Map!</button>
        </div>
      );
    }
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