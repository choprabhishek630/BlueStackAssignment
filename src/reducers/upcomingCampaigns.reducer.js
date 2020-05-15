import { ACTION_TYPES } from './../enums/enums.js'
import QuickSort from './../utils/quickSort';
function isUpcoming(campaign) {
	var currDate = new Date();
	var campaignDate = new Date(campaign.createdOn);
	return ((campaignDate.getDate() != currDate.getDate() || campaignDate.getMonth() != currDate.getMonth() || campaignDate.getFullYear() != currDate.getFullYear()) && campaign.createdOn > Date.now());
}

function comparator(campaign1, campaign2) {
	return (campaign1.createdOn - campaign2.createdOn);
}

function upcomingCampaigns(state = [], action) {
	switch (action.type) {
		case ACTION_TYPES.INIT_CAMPAIGN:
			var newState = [];
			newState = action.campaigns.filter(function(campaign) {
				return isUpcoming(campaign);
			});
			QuickSort.sort(newState, comparator);
			return newState;
		case ACTION_TYPES.UPDATE:
			var idx = -1;
			for (var i = 0 ; i < state.length ; i++) {
				if (state[i].id == action.campaign.id) {
					idx = i;
					break;
				}
			}
			var isU = isUpcoming(action.campaign);
			if (idx < 0 && !isU) {
				return state;
			}
			var newState = state.slice();
			if (idx >= 0) {
				newState.splice(idx, 1);
			}


			if (isU) {
				var idxToInsert = 0;
				while (idxToInsert < newState.length && comparator(action.campaign, newState[idxToInsert]) > 0) idxToInsert++;
				newState.splice(idxToInsert, 0, action.campaign);
			}
			return newState;
		default:
			return state;
	}
}

export default upcomingCampaigns;