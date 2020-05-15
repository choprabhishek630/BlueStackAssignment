import { ACTION_TYPES } from './../enums/enums.js'

export function initCampaign(campaigns) {
	return {
		type: ACTION_TYPES.INIT_CAMPAIGN,
		campaigns
	}
}

export function updateCampaign(campaign, date) {
	var newCampaign = {...campaign};
	newCampaign.createdOn = +date;
	return {
		type: ACTION_TYPES.UPDATE,
		campaign: newCampaign
	}
}