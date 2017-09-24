import React, {Component} from "react"
import {connect} from "react-redux"

import "./header.sass"

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="container">
					Header33
				</div>
			</div>
		)
	}
}

export default connect()(Header)