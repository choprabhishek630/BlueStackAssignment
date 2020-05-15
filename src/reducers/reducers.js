import { combineReducers } from 'redux';
import pastCampaigns from './pastCampaigns.reducer'
import upcomingCampaigns from './upcomingCampaigns.reducer'
import liveCampaigns from './liveCampaigns.reducer'

const campaignApp = combineReducers({
  pastCampaigns,
  upcomingCampaigns,
  liveCampaigns
});

export default campaignApp;