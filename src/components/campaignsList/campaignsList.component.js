import React, { Component } from 'react';
import './campaignsList.component.css';


import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {updateCampaign} from './../../actions/actions';




import Reschedule from './../reSchedule/reSchedule.component';
import Symbol from './../symbol/symbol.component';
import CampaignView from './../campaignView/campaignView.component';
import Pricing from './../pricing/pricing.component';
import CampaignDate from './../campaignDate/campaignDate.component';





class CampaignsList extends Component {
  updateCampaign(campaign, date) {
  	this.props.updateCampaign(campaign, date);
  }
  getRows() {
    const {t} = this.props;
  	return this.props.campaigns.map((campaign) => {
  		return (
  			<div className="table-row data-row"  key={campaign.id} >
  				<div className="col col-1" >
  					<CampaignDate campaign={campaign} />
  				</div>
  				<div className="col col-2" >
  					<CampaignView campaign={campaign} />
  				</div>
  				<div className="col col-3" >
  					<Pricing campaign={campaign} />
  				</div>
  				<div className="col col-4" >
  					<Symbol label={t("CSV")} path="/file.png" />
  					<Symbol label={t("Report")} path="/statistics-report.png" />
  					<Reschedule campaign={campaign} onApply={(date) => {
  						this.updateCampaign(campaign, date);
  					}} />
  				</div>
  			</div>
  		);
  	});
  }

  getCards() {
    const {t} = this.props;
  	return this.props.campaigns.map((campaign) => {
  		return (
    			<div className="card"  key={campaign.id} >
    				<CampaignView campaign={campaign} isCard={true} />
    				<div className="actions" >
    					<Pricing campaign={campaign} isCard={true} />
    					<Symbol isCard={true} label={t("CSV")} path="/file.png" />
    					<Symbol isCard={true} label={t("Report")} path="/statistics-report.png" />
    					<Reschedule campaign={campaign} onApply={(date) => {
    						this.updateCampaign(campaign, date);
    					}} isCard={true} />
    				</div>
  			</div>
  		);
  	});
  }
  render() {
  	const {t} = this.props;
    return (
      	<div className="responsive-table" >
      		<div className="table-row header-row" >
      			<div className="col col-1" >{t("Date")}</div>
      			<div className="col col-2" >{t("Campaign")}</div>
      			<div className="col col-3" >{t("View")}</div>
      			<div className="col col-4" >{t("Actions")}</div>
      		</div>
      		<div className="data-container" >
      			{
      				(this.props.campaigns.length <= 0 ?
      				<div className="no-data" >{t("NoCampaignsScheduled")}</div> : this.getRows())
      			}
      		</div>

      		<div className="card-container" >
      			{
      				(this.props.campaigns.length <= 0 ?
      				<div className="no-data" >{t("NoCampaignsScheduled")}</div> : this.getCards())
      			}
      		</div>
      	</div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return {
		updateCampaign: (campaign, date) => { dispatch(updateCampaign(campaign, date)) }
	};
}

export default connect(null, mapDispatchToProps)(withTranslation()(CampaignsList));


