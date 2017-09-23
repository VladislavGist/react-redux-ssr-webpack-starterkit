import React, {Component} from "react"

import toggleOpen from "../../decorators/toggleOpen"

import Comment from "./comment"

class CommentsList extends Component {
	static defaultProps = {
		comments: []
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

	render() {
		const {isOpen, toggleIsOpen} = this.props
		const comLen = this.props.comments.length
		return (
			<div>
				{isOpen ? ::this.getComments() : null}
				{comLen > 0 ? <button onClick={toggleIsOpen}>{isOpen ? "Hide comments" : "Show comments"}</button> : null}
			</div>
		)
	}
}

export default toggleOpen(CommentsList)