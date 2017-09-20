import React, {Component} from "react"
import {connect} from "react-redux"

import "./sideBar.sass"

class SideBar extends Component {
	render() {
		return (
			<div className="sidebar">SideBar</div>
		)
	}
}

export default connect()(SideBar)