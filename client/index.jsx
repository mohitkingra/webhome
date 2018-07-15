import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import indiadata from './../server/public/data/india-states.json';

import domtoimage from 'dom-to-image';
import fileSaver from 'file-saver';

import CountryList  from './src/containers/country.js';

import imgWorldUrl from './../server/public/img/world-whale.jpg';
import ReactGA from 'react-ga';

let stateCount = 0;
let ciityCount = 0;

let styles = {
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width:200,
    height:50,
  },
};

class IndiaMap extends React.Component {
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
      .translate([-750, 800])
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
    domtoimage.toBlob(this.refs.saveImage, { width: window.navigator.userAgent.toLowerCase().includes("mobi") ? 960 : 1280, 
    height: window.navigator.userAgent.toLowerCase().includes("mobi") ? 1020 : 960, 
    style : { "background" : 'url(' + imgWorldUrl + ') no-repeat center'}})
    .then(function (blob) {
        fileSaver.saveAs(blob, 'mytravelmap.png');
    });
  }

  message = (stateCount) => {
    if(stateCount === 0)
      return "ummmm...";
    else if(stateCount <= 9 )
      return "Nice";
    else if(stateCount >= 10 && stateCount <= 18)
      return "Cool";
    else if(stateCount >= 19 && stateCount <= 27)
      return "Awesome";
    else if(stateCount >= 28 && stateCount < 36)
      return "Super Awesome";
    else
      return "Congratulations ";
  }

  render(){
    return(
      <div>
        <div ref="saveImage">
          <svg width={'100%'} height={ 720 } viewBox="0 0 1280 720">
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
            <h1> {this.message(stateCount)}!, that is {Number((stateCount/36)*100).toFixed(2)}% of India!</h1>
                      </div>
                    </div>
                    <div style={{"textAlign" : "center"}}>
          <button style={styles.button} onClick={this.onSaveMap}>Download your Map</button>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'india'};
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){
    ReactGA.initialize('XXX');
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.ga('send', 'pageview', '/mytravelmap');
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {      
      return(
          <div style={{background: 'url(' + imgWorldUrl + ') no-repeat center', backgroundSize : "100% 100%"}}>
            <label style={{"display" : "block", "textAlign" : "center", "fontSize" : 24}}>
              Where all have you been? in INDIA!
            </label>
            <label style={{"display" : "block", "marginLeft": 20, "textAlign" : "left"}}>
              Select the State/City...
            </label>
              <CountryList />
              <IndiaMap />
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
