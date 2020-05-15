import React, { Component } from 'react';
import './symbol.component.css';

class Symbol extends Component {
	render() {
		return (
			<div className={"symbol-container" + (this.props.isCard ? " card-symbol-container" : "")} >
				<img src={this.props.path} />
				<label>{this.props.label}</label>
			</div>
		);
	}
}

export default Symbol;