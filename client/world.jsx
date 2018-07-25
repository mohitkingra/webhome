import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import countrydata from './../server/public/data/country.json';
import worlddata from './../server/public/data/world-110m.json';

import domtoimage from 'dom-to-image';
import fileSaver from 'file-saver';

import ContinentList  from './src/containers/continent.js';

import imgWorldUrl from './../server/public/img/world-whale.jpg';

import imgtravelQR from './../server/public/img/mytravelmapqr.png';
import imgworldQR from './../server/public/img/myworldmapqr.png';

import countryArea from './src/reducers/areaWorld.js';

import ReactGA from 'react-ga';

let continentCount = 0;
let countryCount = 0;
let cityCount = 0;

let travelArea = 0;

let styles = {
  container: {
   display: 'flex',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'space-between',
   flexDirection : 'row'
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

class SocialMediaShare extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
    <div style={styles.sharebutton}>
        <FacebookShareButton url={'http://mohitkingra.com/myworldmap'}> 
          <FacebookIcon size={32} round={true} />
          <FacebookShareCount url={'http://mohitkingra.com/myworldmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </FacebookShareCount>
        </FacebookShareButton>
        <GooglePlusShareButton url={'http://mohitkingra.com/myworldmap'}> 
          <GooglePlusIcon size={32} round={true} />
          <GooglePlusShareCount url={'http://mohitkingra.com/myworldmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <LinkedinShareButton url={'http://mohitkingra.com/myworldmap'}> 
          <LinkedinIcon size={32} round={true} />
          <LinkedinShareCount url={'http://mohitkingra.com/myworldmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TwitterShareButton url={'http://mohitkingra.com/myworldmap'}> 
          <TwitterIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>
        </TwitterShareButton>
        <VKShareButton url={'http://mohitkingra.com/myworldmap'}> 
        <VKIcon size={32} round={true} />
          <VKShareCount url={'http://mohitkingra.com/myworldmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </VKShareCount>
        </VKShareButton>
        <RedditShareButton url={'http://mohitkingra.com/myworldmap'}> 
        <RedditIcon size={32} round={true} />
          <RedditShareCount url={'http://mohitkingra.com/myworldmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </RedditShareCount>
        </RedditShareButton>
        <WhatsappShareButton url={'http://mohitkingra.com/myworldmap'}> 
          <WhatsappIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>  
        </WhatsappShareButton> 
        <TelegramShareButton url={'http://mohitkingra.com/myworldmap'}> 
          <TelegramIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>
        </TelegramShareButton>  
    </div>
    );
  }
}

const continentColor = [
  'honeydew',
  'sandybrown',
  'chartreuse',
  'salmon',
  'gold',
  'darkturquoise',
  'aqua',
  'mistyrose',
  'teal']

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
        .scale(150)
        .translate([1280/2, 450])
    }

  componentDidMount() {


      var travelState = [];

      store.subscribe(() => {
        travelState = store.getState().continentReducer.continents; 

        var renderData = [];

        continentCount = 0;
        countryCount = 0;
        cityCount = 0;

        travelArea=0;

        travelState.forEach((continent, index) => {

          if(continent.countries.some(country => country.cities.some(city => city.select === 1)))
            continentCount++;
          
          continent.countries.forEach((country, index) => {

          //get selected countries name
          if(country.cities.some(city => city.select === 1)){

            countryCount++;
            
            let count=0;
            country.cities.forEach((city, index) => {
              
              if(city.select ===1){
                cityCount++;
                count++;
              }

            })

            travelArea += countryArea[country.name] * (count/country.cities.length);

            //get country id from name    
            countrydata.forEach((countryData, index) => {

              //update arr for matched countries
              if(country.name === countryData["name"]){

                worlddata.objects.countries.geometries.forEach(function(geometry, index) {
 
                  if(geometry.id == countryData["country-code"]) {
 
              
                      // Update fillstyle
                      if(countryData["region"] === "Africa")
                        renderData[index]=1;
                      else if(countryData["region"] === "Asia")
                        renderData[index]=2;
                      else if(countryData["region"] === "Europe")
                        renderData[index]=3;
                      else if(countryData["sub-region"] === "Northern America" || countryData["sub-region"] === "Central America" || countryData["sub-region" === "Caribbean"])
                        renderData[index]=4;
                      else if(countryData["sub-region"] === "South America")
                        renderData[index]=5;
                      else if(countryData["region"] === "Oceania")
                        renderData[index]=6;
                      else if(countryData["region"] === "")
                        renderData[index]=7;
                        
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

  onSaveMap = () => {
    domtoimage.toBlob(this.refs.saveImage, { width: window.navigator.userAgent.toLowerCase().includes("mobi") ? 960 : window.screenWidth, 
    height: window.navigator.userAgent.toLowerCase().includes("mobi") ? 1020 : window.screenHeight, 
    style : { "background" : 'url(' + imgWorldUrl + ') no-repeat center'}})
    .then(function (blob) {
        fileSaver.saveAs(blob, 'myworldmap.png');
    });
  }


  message = (countryCount) => {
    if(countryCount === 0)
      return "ummmm...";
    else if(countryCount <= 10 )
      return "Nice";
    else if(countryCount >= 10 && countryCount <= 50)
      return "Cool";
    else if(countryCount >= 50 && countryCount <= 100)
      return "Awesome";
    else if(countryCount >= 100 && countryCount < 200)
      return "Super Awesome";
    else if(countryCount >=200 && countryCount < 212)
      return "Super Super Awesome";
    else if(countryCount ==200)
      return "Congratulations";
  }


  render() {
    return (
    <div>
      <div ref= "saveImage">
        <svg width={ '100%' } height={ 720 } viewBox="0 0 1280 720">
          <g className="countries">
            {
              this.state.worlddata.map((d,i) => (
                <path
                  className="country"
                  stroke="gray" 
                  strokeWidth="1"
                  fill={ this.state.renderState[i] ? continentColor[this.state.renderState[i]] : 'honeydew'}
                  key={ `path-${ i }` }
                  d={ geoPath().projection(this.projection())(d) }
                />
              ))
            }
          </g>
        </svg>
        <div style={styles.container}>
          <div>
            <img style={{"visibility" : "hidden"}} src={imgtravelQR} width={100} height={100} />
          </div>
          <div style={{"textAlign" : "center"}}>
            <h1>You have traveled...</h1>
            <h3>{cityCount} out of total 754 Cities listed!</h3>
            <h3>{countryCount} out of total 235 Territories (includes 193 UN member states)!</h3>
            <h3>{continentCount} out of total 7 Continents!</h3>
            <h1>{this.message(countryCount)}!, that is {Number((travelArea/148807409.1)*100).toFixed(2)}% of World! (Area) </h1>
          </div>
          <div>
            <img src={imgworldQR} width={100} height={100} />
          </div>
        </div>
      </div>
      <SocialMediaShare />
      <div style={{"textAlign" : "center"}}>
        <button style={styles.button} onClick={this.onSaveMap}>Save your Map</button>
      </div>
    </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    ReactGA.initialize('XXX');
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.ga('send', 'pageview', '/myworldmap');
  }

  render() {      
      return(
          <div style={{background: 'url(' + imgWorldUrl + ') no-repeat center', backgroundSize : "100% 100%"}}>
            <label style={{"display" : "block", "textAlign" : "center", "fontSize" : 24}}>
              Where all have you been? in World!
            </label>
            <label style={{"display" : "block", "marginLeft": 20, "textAlign" : "left"}}>
                Select the Continent/Country|Territory/City you have been...
            </label>
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
