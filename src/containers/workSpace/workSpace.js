import React, {Component} from "react"
import {connect} from "react-redux"

import "./workSpace.sass"

class WorkSpace extends Component {
	render() {
		return (
				<div className="workSpace">
					WorkSpace
					<img src={require("../../images/webpack-icon.svg")} alt=""/>
				</div>
		)
	}
}

export default connect()(WorkSpace)