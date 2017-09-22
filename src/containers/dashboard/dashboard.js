import React, {Component} from "react"
import {connect} from "react-redux"

import "./dashboard.sass"

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<div className="container">
					Dashboard
				</div>
			</div>
		)
	}
}

export default connect()(Dashboard)