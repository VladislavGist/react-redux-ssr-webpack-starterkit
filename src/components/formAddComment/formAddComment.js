import React, {Component} from "react"

import "./formAddComment.sass"

class FormAddComment extends Component {
	state = {
		user: "",
		comment: ""
	}

	setText(e) {
		let stateElem = e.target.attributes["data-state"].nodeValue
		let maxLength = e.target.attributes["data-maxLength"].nodeValue

		if(e.target.value.length > maxLength) {
			return false
		} else {
			this.setState({
				[stateElem]: e.target.value
			})
		}
	}

	errorClass(type) {
		let typeLen = this.state[type].length
		return (
			typeLen < 5 && typeLen !== 0 ? "errorFormInput" : ""
		)
	}

	render() {
		return(
			<form>
				User: <input
					value={this.state.user}
					data-state="user"
					data-maxLength={7}
					onChange={::this.setText}
					className={::this.errorClass("user")} />

				Comment: <input
					value={this.state.comment}
					data-state="comment"
					data-maxLength={40}
					onChange={::this.setText}
					className={::this.errorClass("comment")}/>

				<button>Submit</button>
			</form>
		)
	}
}

export default FormAddComment