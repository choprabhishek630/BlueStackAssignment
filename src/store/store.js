import { createStore } from 'redux'
import campaignApp from './../reducers/reducers'
const store = createStore(campaignApp);

export default store;