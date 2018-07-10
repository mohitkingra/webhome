import React, { Button, ImageBackground } from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import continentReducer from './src/reducers/indexWorld.js';
import countryReducer from './src/reducers/indexCountry.js';

let store = createStore(combineReducers({continentReducer, countryReducer}));

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import indiadata from './../server/public/data/india-states.json';
import countrydata from './../server/public/data/country.json';
import worlddata from './../server/public/data/world-110m.json';

import domtoimage from 'dom-to-image';
import fileSaver from 'file-saver';

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  VKShareButton,
  RedditShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  VKIcon,
  RedditIcon,
} from 'react-share';

import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  VKShareCount,
  RedditShareCount,
} from 'react-share';

import ContinentList  from './src/containers/continent.js';
import CountryList  from './src/containers/country.js';

import imgWorldUrl from './../server/public/img/world-whale.jpg';
import imgWorldBackgroundUrl from './../server/public/img/world-whale1.jpg';

let continentCount = 0;
let countryCount = 0;
let stateCount = 0;
let cityCount = 0;
let ciityCount = 0;

let indiaMap = new Image();

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
  sharebutton:{
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  }
};

class SocialMediaShare extends React.Component {
  constructor() {
    super();
  }
  
  render(){
    return(
      <div style={styles.sharebutton}>
        <FacebookShareButton url={indiaMap}> 
          <FacebookIcon size={32} round={true} />
          <FacebookShareCount url={'http://mohitkingra.com/yourtravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </FacebookShareCount>
        </FacebookShareButton>
        <GooglePlusShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
          <GooglePlusIcon size={32} round={true} />
          <GooglePlusShareCount url={'http://mohitkingra.com/yourtravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <LinkedinShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
          <LinkedinIcon size={32} round={true} />
          <LinkedinShareCount url={'http://mohitkingra.com/yourtravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TwitterShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
          <TwitterIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>
        </TwitterShareButton>
        <VKShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
        <VKIcon size={32} round={true} />
          <VKShareCount url={'http://mohitkingra.com/yourtravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </VKShareCount>
        </VKShareButton>
        <RedditShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
        <RedditIcon size={32} round={true} />
          <RedditShareCount url={'http://mohitkingra.com/yourtravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </RedditShareCount>
        </RedditShareButton>
        <WhatsappShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
          <WhatsappIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>  
        </WhatsappShareButton> 
        <TelegramShareButton url={'http://mohitkingra.com/yourtravelmap'}> 
          <TelegramIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>
        </TelegramShareButton>  
    </div>
    );
  }
}

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
              if(geometry.properties["NAME_1"] === state.name ) {
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
    domtoimage.toBlob(this.refs.saveImage, { width: 1280, height: 960, style : { "background" : 'url(' + imgWorldBackgroundUrl + ') no-repeat center'}})
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
            <h1> You have traveled to... </h1>
            <h3> {ciityCount} out of total 66 cities listed!</h3>
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



class WorldMap extends React.Component {
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

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'india'};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {      
      return(
          <div style={{background: 'url(' + imgWorldUrl + ') no-repeat center', backgroundSize : "100% 100%"}}>
            <label style={{"display" : "block", "textAlign" : "center"}}>
              Create Travel Map for
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="india">India</option>
                <option value="world">World</option>
              </select>
            </label>
            <div style={this.state.value === 'india' ? {"display": "block"} : {"display": "none"}} >
              <label style={{"display" : "block", "marginLeft": 20, "textAlign" : "left"}}>
                Select the State/City you have been...
              </label>
              <CountryList />
              <IndiaMap />
            </div>
            <div style={this.state.value === 'world' ? {"display": "block"} : {"display": "none"}} >
              <label style={{"display" : "block", "marginLeft": 20, "textAlign" : "left"}}>
                Select the Continent/Country/City you have been...
              </label>
              <ContinentList />
              <WorldMap />
            </div>
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