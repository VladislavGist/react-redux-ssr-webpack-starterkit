import React, {Component} from "react"
import {connect} from "react-redux"

import "./profile.sass"

class Profile extends Component {
	render() {
		console.log(process.env.NODE_ENV)
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