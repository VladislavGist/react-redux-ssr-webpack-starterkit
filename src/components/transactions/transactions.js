import React, {Component} from "react"
import {connect} from "react-redux"

import "./transactions.sass"

class Transactions extends Component {
	render() {
		return (
			<div className="transactions">
				<div className="container">
					Transactions
				</div>
			</div>
		)
	}
}

export default connect()(Transactions)