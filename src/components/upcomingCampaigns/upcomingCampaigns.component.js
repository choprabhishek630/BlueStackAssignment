import React, { Component } from 'react';
import CampaignsList from './../campaignsList/campaignsList.component';
import { connect } from 'react-redux';
class UpcomingCampaigns extends Component {
  render() {
  	var campaigns = this.props.upcomingCampaigns ? this.props.upcomingCampaigns : [];
    return (
      <div className="upcoming-campaigns-container" >
      	<CampaignsList campaigns={campaigns} />	
      </div>
    );
  }
}

function mapStateToProps({upcomingCampaigns}) {
	return {
		upcomingCampaigns
	}
}
export default connect(mapStateToProps)(UpcomingCampaigns);