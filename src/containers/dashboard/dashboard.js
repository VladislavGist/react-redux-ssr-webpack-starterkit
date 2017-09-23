import React, {Component} from "react"
import {connect} from "react-redux"

import "./dashboard.sass"

import data from "../../data.json"

import ArticleList from "../comments/articleList"

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<div className="container">
					<ArticleList data={data} />
					<img src={require("../../images/webpack-icon.svg")} alt=""/>
				</div>
			</div>
		)
	}
}

export default connect()(Dashboard)