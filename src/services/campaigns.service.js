import data from './../JSON/data.json';
var CampaignsService = (function() {
	function fetch() {
		return new Promise(function(resolve, reject) {
			try {
				resolve({
					campaigns: data.data
				});
			} catch(err) {
				reject();
			}
		});
	}

	function updateSchedule(id, scheduleTime) {
		return new Promise(function(resolve, reject) {
			try {
				resolve();
			} catch (err) {
				reject();
			}
		});
	}

	return {
		fetch: fetch
	};
})();

export default CampaignsService;