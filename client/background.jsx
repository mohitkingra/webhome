import React from 'react';
import ReactDOM from 'react-dom';

import imgWorldUrl from './../server/public/img/world-whale.jpg';

class Background extends React.Component{
	constructor(props){
		super();
	}

	render(){
		return(
			<div style={{background: 'url(' + imgWorldUrl + ') no-repeat center', backgroundSize : "100% 100%"}} />);
	}
}
ReactDOM.render(
    <Background />,
    document.querySelector('.react-container')
);