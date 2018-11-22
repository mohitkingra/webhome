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

import imgtravelQR from './../server/public/img/mytravelmapqr.png';
import imgworldQR from './../server/public/img/myworldmapqr.png';

import stateArea from './src/reducers/areaIndia.js';

import ReactGA from 'react-ga';

let stateCount = 0;
let ciityCount = 0;

let travelArea = 0;

let styles = {
  container: {
   display: 'flex',
   flex: 1,
   alignItems: 'center',
   justifyContent: 'space-between',
   flexDirection : 'row',
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
        <FacebookShareButton url={'http://mohitkingra.com/mytravelmap'}> 
          <FacebookIcon size={32} round={true} />
          <FacebookShareCount url={'http://mohitkingra.com/mytravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </FacebookShareCount>
        </FacebookShareButton>
        <GooglePlusShareButton url={'http://mohitkingra.com/mytravelmap'}> 
          <GooglePlusIcon size={32} round={true} />
          <GooglePlusShareCount url={'http://mohitkingra.com/mytravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <LinkedinShareButton url={'http://mohitkingra.com/mytravelmap'}> 
          <LinkedinIcon size={32} round={true} />
          <LinkedinShareCount url={'http://mohitkingra.com/mytravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </LinkedinShareCount>
        </LinkedinShareButton>
        <TwitterShareButton url={'http://mohitkingra.com/mytravelmap'}> 
          <TwitterIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>
        </TwitterShareButton>
        <VKShareButton url={'http://mohitkingra.com/mytravelmap'}> 
        <VKIcon size={32} round={true} />
          <VKShareCount url={'http://mohitkingra.com/mytravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </VKShareCount>
        </VKShareButton>
        <RedditShareButton url={'http://mohitkingra.com/mytravelmap'}> 
        <RedditIcon size={32} round={true} />
          <RedditShareCount url={'http://mohitkingra.com/mytravelmap'}> 
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </RedditShareCount>
        </RedditShareButton>
        <WhatsappShareButton url={'http://mohitkingra.com/mytravelmap'}> 
          <WhatsappIcon size={32} round={true} />
          <span className="myShareCountWrapper">{0}</span>  
        </WhatsappShareButton> 
        <TelegramShareButton url={'http://mohitkingra.com/mytravelmap'}> 
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

        travelArea = 0;

        travelState.forEach((state, index) => {

          if(state.cities.some((city => city.select === 1))){
            stateCount++;

            let count = 0;
            state.cities.forEach((city, index) => {
              if(city.select === 1){
                ciityCount++;
                count++;
              }
            })

            travelArea += stateArea[state.name]*(count/state.cities.length);

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

  filter = () => {

  }

  onSaveMap = () => {
    domtoimage.toBlob(this.refs.saveImage, { width: window.navigator.userAgent.toLowerCase().includes("mobi") ? 960 : window.screenWidth, 
    height: window.navigator.userAgent.toLowerCase().includes("mobi") ? 1020 : window.screenHeight, 
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
          <svg width={window.navigator.userAgent.toLowerCase().includes("mobi") ? 960 : 1280 } height={ 720 } viewBox="0 0 1280 720">
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
          <div style={styles.container}>
            <div>
              <img style={{"visibility" : "hidden"}} src={imgtravelQR} width={100} height={100} />
            </div>
            <div style={{"textAlign" : "center"}}>
              <h1> You have traveled... </h1>
              <h3> {ciityCount} out of total 184 cities listed!</h3>
              <h3> {stateCount} out of total 29 states and 7 Union Territories!</h3>
              <h1> {this.message(stateCount)}!, that is {Number((travelArea/3287232)*100).toFixed(2)}% of India (Area)!</h1>
            </div>
            <div>
              <img src={imgtravelQR} width={100} height={100} />
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
    ReactGA.initialize('UA-116421007-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.ga('send', 'pageview', '/mytravelmap');
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
