import React, {PureComponent} from "react"
import PropTypes from "prop-types"

import "./article.sass"

import CommentsList from "./commentsList"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

class Article extends PureComponent {
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
			<ReactCSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
				component="div"
			>
				<div>
					{item.text}
					<CommentsList comments={item.comments} />
				</div>
			</ReactCSSTransitionGroup>
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
		console.log("----", "update article")
		return (
			<div className="article">
				{identElem === item.id ? ::this.getContent() : ""}
				{identElem === item.id ? <button onClick={::this.closeArticle}>Hide</button> : <button onClick={::this.sendId}>Show</button>}
			</div>
		)
	}
}

export default Article