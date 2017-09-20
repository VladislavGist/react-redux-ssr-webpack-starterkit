import React, {Component} from "react"
import {connect} from "react-redux"

//styles
import "./incrementNumber.sass"

//merge actions and dispatch
import {bindActionCreators} from "redux"

//actions
import {increment} from "../redux/actions/firstActions"

class IncrementNumber extends Component {
	increment() {
		this.props.incrementNumber(this.props.count + 1)
	}

	decrement() {
		this.props.incrementNumber(this.props.count - 1)
	}

	render() {
		return (
			<div className="IncrementNumber">
				test {this.props.count}
				<button onClick={::this.increment}>Increment</button>
				<button onClick={::this.decrement}>Decrement</button>
				<img src={require("../images/webpack-icon.svg")} alt=""/>
			</div>
		)}
}

const mapStateToProps = state => {
	return {
		count: state.firstReducer.count
	}
}

const mapDispatchToProps = dispatch => {
	return {
		incrementNumber: bindActionCreators(increment, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementNumber)