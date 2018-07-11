import React from 'react';
import ReactDOM from 'react-dom';

import imgWorldUrl from './../server/public/img/world-whale.jpg';

import ReactGA from 'react-ga';


class Background extends React.Component{
	constructor(props){
		super();
	}

	componentDidMount(){
		ReactGA.initialize('XXX');
		ReactGA.pageview(window.location.pathname + window.location.search);
		console.log(window.location.pathname);
	}

	render(){
		return(
			<div style={{background: 'url(' + imgWorldUrl + ') no-repeat center', backgroundSize : "100% 100%"}} />
		);
	}
}
ReactDOM.render(
    <Background />,
    document.querySelector('.react-container')
);