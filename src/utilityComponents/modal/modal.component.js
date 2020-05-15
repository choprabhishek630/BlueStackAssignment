import React from "react";
import "./modal.component.css";
export default class Modal extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		show: false
  	}
  }
  toggle() {
  	this.setState({
  		show: !this.state.show
  	});
  }

  onSubmit(e) {
  	this.props.onSubmit(e);
    this.toggle();
  }
  render() {

    let submitBtn = null;
	if (this.props.submitLabel) {
		submitBtn = (
			<button className="btn submit-btn" onClick={this.onSubmit.bind(this)}>
		        {this.props.submitLabel}
		    </button>
	     );
	}
	let modal = (
		<div className="modal-hide" >
			<div className="modal" >
	        	<div className="content">{this.props.children}</div>
		        <div className="actions">
		          <button className="btn close-btn" onClick={this.toggle.bind(this)}>
		            {this.props.closeLabel || "Close"}
		          </button>
		          {submitBtn}
		        </div>
	        </div>
	        <div className="overlay" onClick={this.toggle.bind(this)}></div>
		</div>
	);
    if (!this.state.show) {
      modal = null;
    }


    return (
      <div className="modal-container" >
      	<div className="trigger" onClick={this.toggle.bind(this)} >
      		{this.props.trigger}
      	</div>
        {modal}
      </div>
    );
  }
}
