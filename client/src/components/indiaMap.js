import React from 'react';
import store from './../reducers/index.js';

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import domtoimage from 'dom-to-image';
import fileSaver from 'file-saver';

import indiadata from './../../../server/public/data/india-states.json';

let styles = {
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width:200,
    height:50,
  },
};

let stateCount = 0;
let ciityCount = 0;

export default class IndiaMap extends React.Component {
  constructor() {
    super();
    
    this.state={
      indiadata: feature(indiadata, indiadata.objects.states).features,
      renderState: [],
    }
  }

  projection() {
    return geoMercator()
      .scale(1000)
      .translate([-780, 800])
  }

 componentDidMount() {

      var travelState = [];

      store.subscribe(() => {
        travelState = store.getState().countryReducer.states; 

        var renderData = [];

        stateCount = 0;
        ciityCount = 0;

        travelState.forEach((state, index) => {

          if(state.cities.some((city => city.select === 1))){
            stateCount++;

            state.cities.forEach((city, index) => {
              if(city.select === 1)
                ciityCount++;
            })

            //get country id from name    
            
            indiadata.objects.states.geometries.forEach(function(geometry, index) {
              if(geometry.properties["NAME_1"] === state.name || ( geometry.properties["NAME_1"] === "Andhra Pradesh" && state.name === "Telangana")) {
                // Update fillstyle
                renderData[index]=1;
              }
            });
          }
        })

        this.setState({
          renderState: renderData,
        })
      })

  }

  componentWillUnmount(){
    //store.unsubsribe();
  }

  onSaveMap = () => {
    domtoimage.toBlob(this.refs.saveImage, { width: 1280, height: 960, style : { "background" : 'url(' + imgWorldUrl + ') no-repeat center'}})
    .then(function (blob) {
        fileSaver.saveAs(blob, 'mytravelmap.png');
    });
  }

  render(){
    return(
      <div>
        <div ref="saveImage">
          <svg width={ 1280 } height={ 720 } viewBox="0 0 1280 720">
            {
              this.state.indiadata.map((d,i) => (
                <path
                  stroke="gray"
                  strokeWidth="0.5"
                  key={ `path-${ i }` }
                  fill={ this.state.renderState[i] ? 'forestgreen' : 'honeydew' }
                  d={ geoPath().projection(this.projection())(d) }
                />
              ))
            }
          </svg>
          <div style={{"textAlign" : "center"}}>
            <h1> You have traveled... </h1>
            <h3> {ciityCount} out of total 184 cities listed!</h3>
            <h3> {stateCount} out of total 29 states and 7 Union Territories!</h3>
            <h1> Congratulations!, that is {Number((stateCount/36)*100).toFixed(2)}% of India!</h1>
          </div>
        </div>
        <div style={{"textAlign" : "center"}}>
          <button style={styles.button} onClick={this.onSaveMap}>Download your Map</button>
        </div>
      </div>
    );
  }
}