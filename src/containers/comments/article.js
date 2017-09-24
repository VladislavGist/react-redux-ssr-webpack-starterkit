import React, {Component} from "react"
import PropTypes from "prop-types"

import "./article.sass"

import CommentsList from "./commentsList"

class Article extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
		identElem: PropTypes.string,
		getOpenArticle: PropTypes.func.isRequired
	}

	static defaultProps = {
		item: {}
	}

	getContent() {
		const {item} = this.props
		return (
			<div>
				{item.text}
				<CommentsList comments={item.comments} />
			</div>
		)
	}

	sendId() {
		this.props.getOpenArticle(this.props.item.id)
	}

	closeArticle() {
		this.props.getOpenArticle(null)
	}

	render() {
		const {identElem, item} = this.props
		return (
			<div className="article">
				{identElem === item.id ? ::this.getContent() : null}
				{identElem === item.id ? <button onClick={::this.closeArticle}>Hide</button> : <button onClick={::this.sendId}>Show</button>}
			</div>
		)
	}
}

export default Article