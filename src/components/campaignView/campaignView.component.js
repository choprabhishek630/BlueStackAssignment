import React, {Component} from 'react';
import './campaignView.component.css';


import CampaignDate from './../campaignDate/campaignDate.component';

class CampaignView extends Component {
	render() {
		let campaignDate = null;
		if (this.props.isCard) {
			campaignDate = (<CampaignDate campaign={this.props.campaign} isCard={true} />);
		}
		return (
			<div className={"campaign-view" + (this.props.isLarge ? " large" : "") + (this.props.isCard ? " card-campaign-view" : "")} >
				<img src={((this.props.isLarge || this.props.isCard) ? this.props.campaign.image_url_3x : this.props.campaign.image_url)} />
				<div className="campaign-info" >
					<label className="name" >{this.props.campaign.name}</label>
					<label className="region" >{this.props.campaign.region}</label>
				</div>
				{campaignDate}

			</div>
		);
	}
}

export default CampaignView;