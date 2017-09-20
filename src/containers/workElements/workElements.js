import React, {Component} from "react"
import {connect} from "react-redux"

import "./workElements.sass"

import ElementsInterface from "../elementsInterface/elementsInterface"
import WorkSpace from "../workSpace/workSpace"
import SettingsElements from "../settingsElements/settingsElements"

class WorkElements extends Component {
	render() {
		return (
			<div className="workElements">
				<ElementsInterface />
				<WorkSpace />
				<SettingsElements />
			</div>
		)
	}
}

export default connect()(WorkElements)