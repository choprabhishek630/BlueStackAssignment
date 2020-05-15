import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';

import Dropdown from 'react-dropdown';
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
					value: "en",
					label: t(languageKey["en"])
				},
				{
					value: "kor",
					label: t(languageKey["kor"])
				}]
		}
	}

	// resetThenSet(id) {
	// 	const {t} = this.props;
	// 	let temp = [];
	// 	this.props.i18n.changeLanguage(id);
	// 	this.state.languages.forEach(item => temp.push({id: item.id, title: t(languageKey[item.id]), selected: (item.id == id ? true : false)}));
	// 	this.setState({
	// 		languages: temp
	// 	});
	// }
	onChange(language) {
		const {t} = this.props;
		this.props.i18n.changeLanguage(language.value);
		let temp = [];
		this.state.languages.forEach((language) => { temp.push({value: language.value, label: t(languageKey[language.value])}); });
		this.setState({
			languages: temp
		});
	}
	render() {
		const {t} = this.props;
		let defaultLanguage = null;
		this.state.languages.forEach((language) => { if (language.value == this.props.i18n.language) defaultLanguage = language; });
		return (
			<Dropdown
			  options={this.state.languages}
			  onChange={this.onChange.bind(this)}
			  value={defaultLanguage}
			  placeholder={t("Select")}
			/>
		);
	}
}

export default withTranslation()(LanguageSelector);