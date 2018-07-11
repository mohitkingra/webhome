import React from 'react';

import imgWorldUrl from './../../../server/public/img/world-whale.jpg';

export default class backgroundImage extends React.Component{
	constructor(props){
		super();
	}

	render(){
		return(
			<div style={{background: 'url(' + imgWorldUrl + ') no-repeat center', backgroundSize : "100% 100%"}} />
			);
	}
}