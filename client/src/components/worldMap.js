import React from 'react';
import store from './../reducers/index.js';

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import domtoimage from 'dom-to-image';
import fileSaver from 'file-saver';

import countrydata from './../../../server/public/data/country.json';
import worlddata from './../../../server/public/data/world-110m.json';

let styles = {
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width:200,
    height:50,
  },
};

let continentCount = 0;
let countryCount = 0;
let cityCount = 0;

export default class WorldMap extends React.Component {
  constructor() {
      super()
      this.state ={
        worlddata: feature(worlddata, worlddata.objects.countries).features,
        renderState: [],
        imageURL: null,
      }
    }
  
  projection() {
      return geoMercator()
        .scale(120)
        .translate([1280/2, 720/2])
    }


  updateState(){

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
    //store.unsubsribe();
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
      <div style={{"textAlign" : "center"}}>
        <h1>You have traveled : {(countryCount/206)*100}% of the World! </h1>
        <h3>{continentCount} out of total 7 Continents!</h3>
        <h3>{countryCount} out of total 206 Countries!</h3>
        <h3>{cityCount} out of total Cities listed!</h3>
      </div>
    </div>
    );
  }
}