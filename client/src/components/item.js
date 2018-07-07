import React from 'react';

import PropTypes from 'prop-types';

let styles = {
  buttonDefault: {
    width: 100,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  buttonClicked: {
    width: 100,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'gray',
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


      if(this.props.id.substring(0,7) === "Country"){
          this.props.toggleCountry(this.props.name);
      }

      if(this.props.id.substring(0,4) === "City"){
          this.props.toggleCity(this.props.name);
      }

  }

	render(){
		return(
        <button style={this.props.highlight ? styles.buttonClicked : styles.buttonDefault} onClick={this.onButtonPress}>{this.props.name}</button>
    );
	}
}
