import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

import {Dropdown} from 'reactjs-dropdown-component';
import './languageSelector.component.css';

const languageKey = Object.freeze({
	en: "English",
	kor: "Korean"
});
class LanguageSelector extends Component {
	constructor(props) {
		super(props);
		const {t} = this.props;
		this.state = {
			languages: [{
					id: "en",
					title: t(languageKey["en"]),
					selected: true
				},
				{
					id: "kor",
					title: t(languageKey["kor"]),
					selected: false,
					label: "English"
				}]
		}
	}

	resetThenSet(id) {
		const {t} = this.props;
		let temp = [];
		this.props.i18n.changeLanguage(id);
		this.state.languages.forEach(item => temp.push({id: item.id, title: t(languageKey[item.id]), selected: (item.id == id ? true : false)}));
		this.setState({
			languages: temp
		});
	}
	render() {
		return (
			<Dropdown
			  title="Select"
			  list={this.state.languages}
			  resetThenSet={this.resetThenSet.bind(this)}
			/>
		);
	}
}

export default withTranslation()(LanguageSelector);