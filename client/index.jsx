import React, { Button, ImageBackground } from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import continentReducer from './src/reducers/index.js';
let store = createStore(combineReducers({continentReducer}));

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import indiadata from './../server/public/data/india-states.json';
import countrydata from './../server/public/data/country.json';
import worlddata from './../server/public/data/world-110m.json';

let imgUrl = './../server/public/img/background.jpg';

import ContinentList  from './src/containers/continent.js';

let continentCount = 0;
let countryCount = 0;
let cityCount = 0;

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

class IndiaMap extends React.Component {
  constructor() {
    super();
    this.state={
      indiadata: feature(indiadata, indiadata.objects.states).features,
    }
  }

  projection() {
    return geoMercator()
      .scale(800)
      .translate([-450, 650])
  }

  render(){
    return(
      <svg width={ 1280 } height={ 720 } viewBox="0 0 1280 720">
            {
              this.state.indiadata.map((d,i) => (
                <path
                  stroke="gray"
                  strokeWidth="0.5"
                  key={ `path-${ i }` }
                  fill={'none'}
                  d={ geoPath().projection(this.projection())(d) }
                />
              ))
            }
      </svg>
    );
  }
}



class WorldMap extends React.Component {
  constructor() {
      super()
      this.state ={
        worlddata: feature(worlddata, worlddata.objects.countries).features,
        renderState: [],
      }
    }
  
  projection() {
      return geoMercator()
        .scale(120)
        .translate([1280/2, 720/2])
    }

  componentDidMount() {

      var travelState = [];

      store.subscribe(() => {
        travelState = store.getState().continentReducer.continents; 

        var renderData = [];

        continentCount = 0;
        countryCount = 0;
        cityCount = 0;

        travelState.forEach((continent, index) => {

          if(continent.countries.some(country => country.cities.some(city => city.select === 1)))
            continentCount++;
          
          continent.countries.forEach((country, index) => {

          //get selected countries name
          if(country.cities.some(city => city.select === 1)){

            countryCount++;

            country.cities.forEach((city, index) => {
              if(city.select ===1)
                cityCount++;
            })

            //get country id from name    
            countrydata.forEach((countryData, index) => {

              //update arr for matched countries
              if(country.name === countryData["name"] ){

                worlddata.objects.countries.geometries.forEach(function(geometry, index) {
 
                  if(geometry.id == countryData["country-code"]) {
 
                    // Update fillstyle
                    renderData[index]=1;
                  }
                });
              }
            })
          }
        
        })

        this.setState({
          renderState: renderData,
        })
      })
    })  
  }

  componentWillUnmount(){
    store.unsubsribe();
  }

  render() {
    return (
    <div>
      <svg width={ 1280 } height={ 720 } viewBox="0 0 1280 720">
          <g className="countries">
            {
              this.state.worlddata.map((d,i) => (
                <path
                  className="country"
                  stroke="gray" 
                  strokeWidth="1"
                  fill={ this.state.renderState[i] ? 'forestgreen' : 'honeydew' }
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                />
              ))
            }
          </g>
      </svg>
      <div style={{"text-align" : "center"}}>
        <h1>You have traveled : {(countryCount/206)*100}% of the World! </h1>
        <h3>{continentCount} out of total 7 Continents!</h3>
        <h3>{countryCount} out of total 206 Countries!</h3>
        <h3>{cityCount} out of total Cities listed!</h3>
      </div>
    </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
      return(
        <div>
          <ContinentList />
          <WorldMap />
        </div>
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