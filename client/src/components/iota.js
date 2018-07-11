import React from 'react';

import PropTypes from 'prop-types';

let styles = {
  buttonDefault: {
    width: 120,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
    margin: 1,
  },
  buttonClicked: {
    width: 120,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'azure',
    margin: 1,
  },
};

export default class Item extends React.Component {
  constructor(props) {
      super(props);
  }
  
  onButtonPress = () => {

      if(this.props.id.substring(0,9) === "Continent"){
          this.props.toggleContinent(this.props.name);
      }
      else if(this.props.id.substring(0,7) === "Country"){
          this.props.toggleCountry(this.props.name);
      }
      else if(this.props.id.substring(0,4) === "City"){
          this.props.toggleCity(this.props.name);
      }
      else if(this.props.id.substring(0,5) === "State"){
          this.props.toggleState(this.props.name);
      }
      else if(this.props.id.substring(0,5) === "Ciity"){
          this.props.toggleCiity(this.props.name);
      }
  }

	render(){
		return(
        <button style={this.props.highlight ? styles.buttonClicked : styles.buttonDefault} onClick={this.onButtonPress}>{this.props.name}</button>
    );
	}
}
