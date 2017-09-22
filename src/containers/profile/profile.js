import React, {Component} from "react"
import {connect} from "react-redux"

import "./profile.sass"

class Profile extends Component {
	render() {
		return (
			<div className="profile">
				<div className="container">
					Profile
				</div>
			</div>
		)
	}
}

export default connect()(Profile)