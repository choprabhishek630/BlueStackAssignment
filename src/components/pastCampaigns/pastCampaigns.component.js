import React, { Component } from 'react';

import { connect } from 'react-redux';
import CampaignsList from './../campaignsList/campaignsList.component';

class PastCampaigns extends Component {
  render() {
  	var campaigns = this.props.pastCampaigns ? this.props.pastCampaigns : [];
    return (
      <div className="past-campaigns-container" >
      	<CampaignsList campaigns={campaigns} />	
      </div>
    );
  }
}
function mapStateToProps({pastCampaigns}) {
	return {
		pastCampaigns
	}
}

export default connect(mapStateToProps)(PastCampaigns);