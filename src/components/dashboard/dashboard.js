import React, {Component} from "react"
import {connect} from "react-redux"

//styles
import "./dashboard.sass"

//actions
import {increment} from "../../redux/actions/firstActions"
import {changeSelect} from "../../redux/actions/selectActions"

//components
import Select from "react-select"
import "react-select/dist/react-select.css"
import ArticleList from "../../components/articleList/articleList"

class Dashboard extends Component {
	increment() {
		this.props.increment(this.props.stateCount + 1)
	}

	decrement() {
		this.props.increment(this.props.stateCount - 1)
	}

	changeSelection = selected => {
		//передаем только id статей
		this.props.changeSelect(selected.map(option => option.value))
	}

	render() {
		let options = this.props.articles.map(elem => ({
			label: elem.text,
			value: elem.id
		}))

		return (
			<div className="dashboard">
				<div className="container">

					<div className="counter">
						<p className="cntNum">{this.props.stateCount}</p>
						<button onClick={::this.increment} className="btnCounter">Increment</button>
						<button onClick={::this.decrement}>Decrement</button>
					</div>

					<Select
						options={options}
						value={this.props.selectReducer}
						onChange = {::this.changeSelection}
						multi
					/>

					<ArticleList />

					<img src={require("../../images/webpack-icon.svg")} alt=""/>

				</div>
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		stateCount: state.firstReducer.count,
		selectReducer: state.filterReducer.selected,
		articles: state.articlesList
	}
}

let mapDispatchToprops = {increment, changeSelect}

export default connect(mapStateToProps, mapDispatchToprops)(Dashboard)