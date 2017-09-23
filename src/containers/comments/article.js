import React, {Component} from "react"
import PropTypes from "prop-types"

import "./article.sass"

import toggleOpen from "../../decorators/toggleOpen"

import CommentsList from "./commentsList"

class Article extends Component {
	static propTypes = {
		item: PropTypes.object
	}

	static defaultProps = {
		item: {}
	}

	getContent() {
		const {item} = this.props
		return (
			<div>
				{item.text}
				<CommentsList comments={this.props.item.comments} />
			</div>
		)
	}

	render() {
		const {isOpen, toggleIsOpen} = this.props
		return (
			<div className="article">
				{isOpen ? ::this.getContent() : null}
				<button onClick={toggleIsOpen}>{isOpen ? "Hide" : "Show"}</button>
			</div>
		)
	}
}

export default toggleOpen(Article)