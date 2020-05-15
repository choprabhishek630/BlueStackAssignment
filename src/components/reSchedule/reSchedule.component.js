import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import Modal from "./../../utilityComponents/modal/modal.component";
import DatePicker from "react-datepicker";

import Symbol from './../symbol/symbol.component';

import './reSchedule.component.css';

class Reschedule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDate: new Date(this.props.campaign.createdOn)
		};
	}
	handleChange(date) {
		console.log(date);
		this.setState({
			selectedDate: date
		});
	}
	onApply() {
		this.props.onApply(this.state.selectedDate);
	}
	render() {
		const {t} = this.props;
		return (
			<Modal trigger={<Symbol isCard={this.props.isCard ? true : false} label={t("ScheduleAgain")} path="/calendar.png" />} closeLabel={t("Close")} submitLabel={t("Apply")} onSubmit={() => {this.onApply()}} >
				<div className="date-picker-container" >
					<label>{t("SelectDate")}</label>
					<DatePicker
			          selected={this.state.selectedDate}
			          onChange={date => this.handleChange(date)}
			          dateFormat="MMMM d, yyyy"
			        />
				</div>
			</Modal>
		);
	}
}

export default withTranslation()(Reschedule);