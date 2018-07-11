import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './src/reducers/index.js';

import ContinentList  from './src/containers/world.js';
import WorldMap from './src/components/worldMap.js';

import CountryList  from './src/containers/country.js';
import IndiaMap from './src/components/indiaMap.js';

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
          <div>
            <label style={{"display" : "block", "textAlign" : "center", "fontSize" : 24}}>
              Where all have you been? in INDIA!
            </label>
            <label style={window.navigator.userAgent.toLowerCase().includes("mobi") ? {"display" : "block", "textAlign" : "center", "fontSize" : 36} : {"display" : "none"}} >
              Sorry, this webpage may not be as responsive as it must. I will appreciate if you view this webpage on desktop or laptop! :)
            </label>
            <div style={this.state.value === 'india' ? {"display": "block"} : {"display": "none"}} >
              <label style={{"display" : "block", "marginLeft": 20, "textAlign" : "left"}}>
                Select the State/City...
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
