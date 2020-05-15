export const ACTION_TYPES = Object.freeze({
	UPDATE: 'UPDATE',
	INIT_CAMPAIGN: 'INIT_CAMPAIGN'
});

export const CAMPAIGN_TYPES = Object.freeze({
	PAST_CAMPAIGNS: {
		url: "/past",
		label: "PastCampaigns",
		shortLabel: "Past",
		id: 2
	},
	LIVE_CAMPAIGNS: {
		url: "/live",
		label: "LiveCampaigns",
		shortLabel: "Live",
		id: 1
	},
	UPCOMING_CAMPAIGNS: {
		url: "/upcoming",
		label: "UpcomingCampaigns",
		shortLabel: "Upcoming",
		id: 0
	}
});