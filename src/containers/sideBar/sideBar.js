import React, {Component} from "react"
import {connect} from "react-redux"

import {Link} from "react-router"

import "./sideBar.sass"

class SideBar extends Component {
	render() {
		return (
			<div className="sidebar">
				<div className="container">
					<Link to="dashboard">dashboard</Link>
					<Link to="distribution">distribution</Link>
					<Link to="transactions">transactions</Link>
					<Link to="profile">profile</Link>
					<button>logout</button>
				</div>
			</div>
		)
	}
}

export default connect()(SideBar)