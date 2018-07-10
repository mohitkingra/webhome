import { connect } from 'react-redux';
import { toggleState, toggleCiity } from '../actions/indexCountry.js';
import CountryList  from '../components/country.js';

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
