import React, {Component} from "react"
import {connect} from "react-redux"

import "./distribution.sass"

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<div className="container">
					Distribution
				</div>
			</div>
		)
	}
}

export default connect()(Dashboard)