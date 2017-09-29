import React, {Component} from "react"
import PropTypes from "prop-types"

class Comment extends Component {
	static propTypes = {
		comment: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				{this.props.comment}
			</div>
		)
	}
}

export default Comment