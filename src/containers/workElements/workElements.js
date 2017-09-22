import React, {Component} from "react"
import {connect} from "react-redux"

import "./workElements.sass"

class WorkElements extends Component {
	render() {
		return (
			<div className="workElements">
				{this.props.children}
			</div>
		)
	}
}

export default connect()(WorkElements)