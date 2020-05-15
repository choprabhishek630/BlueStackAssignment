import React, { Component } from 'react';

import CampaignsList from './../campaignsList/campaignsList.component';
import { connect } from 'react-redux';
class LiveCampaigns extends Component {
  render() {
    console.log(this.props.liveCampaigns);
    return (
      <div className="live-campaigns-container" >
      	<CampaignsList campaigns={this.props.liveCampaigns} />	
      </div>
    );
  }
}

function mapStateToProps({liveCampaigns}) {
	return {
		liveCampaigns
	}
}

export default connect(mapStateToProps)(LiveCampaigns);