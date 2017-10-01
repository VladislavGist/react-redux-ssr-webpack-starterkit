import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

class Comment extends Component {
	static propTypes = {
		id: PropTypes.string,
		comment: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				{this.props.commentElems.comment}
			</div>
		)
	}
}

let mapStateToProps = (state, ownProps) => {
	console.log(state.commentsList)
	console.log(ownProps)
	return {
		commentElems: state.commentsList.find(comment => comment.id === ownProps.id)
	}
}

export default connect(mapStateToProps)(Comment)