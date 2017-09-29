import React, {Component} from "react"
import {connect} from "react-redux"

import "./dashboard.sass"

import data from "../../data.json"

import Select from "react-select"
import "react-select/dist/react-select.css"

import ArticleList from "../../components/articleList/articleList"

class Dashboard extends Component {
	state = {
		changeSelect: null
	}

	changeSelection = selection => this.setState({
		changeSelect: selection
	})

	render() {
		let options = data.map(elem => ({
			label: elem.text,
			value: elem.id
		}))

		return (
			<div className="dashboard">
				<div className="container">
					<Select
						options={options}
						value={this.state.changeSelect}
						onChange = {::this.changeSelection}
						multi
					/>
					<ArticleList data={data} />
					<img src={require("../../images/webpack-icon.svg")} alt=""/>
				</div>
			</div>
		)
	}
}

export default connect()(Dashboard)