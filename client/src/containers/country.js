import { connect } from 'react-redux';
import { toggleState, toggleCiity } from '../actions/country.js';
import CountryList  from '../components/world.js';

function mapStateToProps(state) {
	return {
		states: state.countryReducer.states,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleState: name => dispatch(toggleState(name)),
		toggleCiity: name => dispatch(toggleCiity(name)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)( CountryList )
