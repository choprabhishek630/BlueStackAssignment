import React, {Component} from 'react';
import Modal from "./../../utilityComponents/modal/modal.component";
import { withTranslation } from 'react-i18next';
import Symbol from './../symbol/symbol.component';
import CampaignView from './../campaignView/campaignView.component';

import './pricing.component.css';

class Pricing extends Component {
	render() {
		const {t} = this.props;
		return (
			<Modal trigger={<Symbol isCard={this.props.isCard ? true : false} label={t("ViewPricing")} path="/Price.png" />} closeLabel={t("Close")} >
				<CampaignView campaign={this.props.campaign} isLarge={true} />
				<div className="pricing" >
					<h1 className="pricing-header" >{t("Pricing")}</h1>
					<h1 className="pricing-row" >
						<label className="period" >1 {t("Week")} - 1 {t("Month")}</label>
						<label className="price" >$ {this.props.campaign.price.oneMonth + ".00"}</label>
					</h1>
					<h1 className="pricing-row" >
						<label className="period" >6 {t("Months")}</label>
						<label className="price" >$ {this.props.campaign.price.sixMonth + ".00"}</label>
					</h1>
					<h1 className="pricing-row" >
						<label className="period" >1 {t("Year")}</label>
						<label className="price" >$ {this.props.campaign.price.oneYear + ".00"}</label>
					</h1>
				</div>
			</Modal>
		);
	}
}

export default withTranslation()(Pricing);