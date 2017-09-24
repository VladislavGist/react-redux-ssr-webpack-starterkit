import React, {Component} from "react"

import PropTypes from "prop-types"

import Comment from "./comment"

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
		const {comments} = this.props
		return (
			<div>
				{
					comments.length > 0 ? comments.map(elem => {
						return <Comment comment={elem.comment} key={elem.id} />
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
			<div>
				{isOpen ? ::this.getComments() : null}
				{comLen > 0 ? <button onClick={::this.toggleIsOpen}>{isOpen ? "Hide comments" : "Show comments"}</button> : null}
			</div>
		)
	}
}

export default CommentsList