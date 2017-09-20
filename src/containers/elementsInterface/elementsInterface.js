import React, {Component} from "react"
import {connect} from "react-redux"

class ElementsInterface extends Component {
	render() {
		return (
			<div>ElementsInterface</div>
		)
	}
}

export default connect()(ElementsInterface)