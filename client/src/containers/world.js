import { connect } from 'react-redux';
import { toggleContinent, toggleCountry, toggleCity } from '../actions/world.js';
import ContinentList  from '../components/world.js';

function mapStateToProps(state) {
	return {
		continents: state.continentReducer.continents,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleContinent: name => dispatch(toggleContinent(name)),
		toggleCountry: name => dispatch(toggleCountry(name)),
		toggleCity: name => dispatch(toggleCity(name)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)( ContinentList )
