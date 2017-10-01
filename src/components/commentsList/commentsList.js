import React, {Component} from "react"
import PropTypes from "prop-types"

import Comment from "../comment/comment"
import FormAddComment from "../formAddComment/formAddComment"

import "./commentsList.sass"

class CommentsList extends Component {
	static PropTypes = {
		comments: PropTypes.array.isRequired
	}

	static defaultProps = {
		comments: []
	}

	state = {
		isOpen: true
	}

	getComments() {
		const {commentsArrId} = this.props
		return (
			<div>
				{
					commentsArrId.length > 0 ? commentsArrId.map(id => {
						return <Comment id={id} key={id} />
					}) : "No comments"
				}
			</div>
		)
	}

	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const {isOpen} = this.state
		const comLen = this.props.comments.length
		return (
			<div className="commentsList">
				{isOpen ? ::this.getComments() : null}
				{comLen > 0 ? <button onClick={::this.toggleIsOpen} className="btnHideComm">{isOpen ? "Hide comments" : "Show comments"}</button> : null}
				<FormAddComment />
			</div>
		)
	}
}

export default CommentsList