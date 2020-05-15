import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import './campaignDate.component.css';



const MS_PER_DAY = (1000 * 24 * 60 * 60);
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


class CampaignDate extends Component {
	exactDate() {
		const {t} = this.props;
		var d = new Date(this.props.campaign.createdOn);
		return (t(MONTHS[d.getMonth()]) + " " + d.getFullYear() + ", " + d.getDate());
	}
	relativeDate() {
		const {t} = this.props;
		var currDate = new Date();
		var campaignDate = new Date(this.props.campaign.createdOn);
		var d1 = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate());
		var d2 = new Date(campaignDate.getFullYear(), campaignDate.getMonth(), campaignDate.getDate());
		var diff = Math.floor((d1 - d2) / MS_PER_DAY);
		if (diff == 0) {
			return t("Today");
		} else if (diff > 0) {
			return (Math.abs(diff) + " " + (Math.abs(diff) == 1 ? t("Day") : t("Days")) + " " + t("ago"));
		} else {
			return (Math.abs(diff) + " " + (Math.abs(diff) == 1 ? t("Day") : t("Days")) + " " + t("ahead"));
		}
	}
	render() {
		const {t} = this.props;
		return (
			<div className={"date-container" + (this.props.isCard ? " card-date-container" : "")} >
				<label className="exact-date" >{this.exactDate()}</label>
				<label className="relative-date" >{this.relativeDate()}</label>
			</div>
		);
	}
}


export default withTranslation()(CampaignDate);