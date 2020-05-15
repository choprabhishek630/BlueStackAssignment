import { NavLink, withRouter, Switch, Route, Redirect } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import React, { Component } from 'react';
import { CAMPAIGN_TYPES } from './../../enums/enums'

import { connect } from 'react-redux';

import './campaigns.component.css'

import LiveCampaigns from './../liveCampaigns/liveCampaigns.component'
import PastCampaigns from './../pastCampaigns/pastCampaigns.component'
import UpcomingCampaigns from './../upcomingCampaigns/upcomingCampaigns.component'

import CampaignsService from './../../services/campaigns.service';
import { initCampaign } from './../../actions/actions';

class Campaigns extends Component {
  componentDidMount() {
    CampaignsService.fetch().then((data) => {
      this.props.onData(data.campaigns);
    }).catch((err) => {
      console.error(err);
    });
  }
  getLink(id, path, label, shortLabel) {
    const {t} = this.props;
    return (
        <NavLink to={path} className="link" activeClassName="selected">
          <span className="long-label" >{t(label)}</span>
          <span className="short-label" >{t(shortLabel)}</span>
        </NavLink>
    );
  }
  render() {
    const { path } = this.props.match;
    const { t } = this.props;
    return (
      <div className="campaign-container" >
          <h1 className="heading" >{t("ManageCampaigns")}</h1>
          <div className="links">
            {this.getLink(CAMPAIGN_TYPES.UPCOMING_CAMPAIGNS.id, path + CAMPAIGN_TYPES.UPCOMING_CAMPAIGNS.url, CAMPAIGN_TYPES.UPCOMING_CAMPAIGNS.label, CAMPAIGN_TYPES.UPCOMING_CAMPAIGNS.shortLabel)}
            {this.getLink(CAMPAIGN_TYPES.LIVE_CAMPAIGNS.id, path + CAMPAIGN_TYPES.LIVE_CAMPAIGNS.url, CAMPAIGN_TYPES.LIVE_CAMPAIGNS.label, CAMPAIGN_TYPES.LIVE_CAMPAIGNS.shortLabel)}
            {this.getLink(CAMPAIGN_TYPES.PAST_CAMPAIGNS.id, path + CAMPAIGN_TYPES.PAST_CAMPAIGNS.url, CAMPAIGN_TYPES.PAST_CAMPAIGNS.label, CAMPAIGN_TYPES.PAST_CAMPAIGNS.shortLabel)}
          </div>
          <div className="tabs">
            <Switch>
              <Route path={`${path + CAMPAIGN_TYPES.UPCOMING_CAMPAIGNS.url}`} exact component={UpcomingCampaigns} />
              <Route path={`${path + CAMPAIGN_TYPES.PAST_CAMPAIGNS.url}`} component={PastCampaigns} />
              <Route path={`${path + CAMPAIGN_TYPES.LIVE_CAMPAIGNS.url}`} component={LiveCampaigns} />
              <Redirect from={`${path}`} to={`${path + CAMPAIGN_TYPES.UPCOMING_CAMPAIGNS.url}`} />
            </Switch>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onData: (data) => dispatch(initCampaign(data))
  }
}


export default connect(null, mapDispatchToProps)(withRouter(withTranslation()(Campaigns)));




