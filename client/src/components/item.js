import React from 'react';

import PropTypes from 'prop-types';

let styles = {
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
};

export default class Item extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        color: 'transparent'
      }
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
      
          if(this.state.color === 'transparent'){
            this.setState({
              color:'gray'
            })
          }
          else{
            this.setState({
              color:'transparent'
            })
          }
      }

  }

	render(){
		return(
        <button 
          style={styles.button}
          title={this.props.name}
          onClick={this.onButtonPress}
        />
    );
	}
}
