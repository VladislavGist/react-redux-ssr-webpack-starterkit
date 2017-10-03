import React, {PureComponent} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

//styles
import "./article.sass"

//actions
import {deleteArticle} from "../../redux/actions/articlesActions"

//components
import CommentsList from "../commentsList/commentsList"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

class Article extends PureComponent {
	static propTypes = {
		item: PropTypes.object.isRequired,
		getOpenArticle: PropTypes.func.isRequired
	}

	static defaultProps = {
		item: {}
	}

	//id = this.props.id

	getContent() {
		const {item} = this.props
		return (
			<ReactCSSTransitionGroup
				transitionName="myClass"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
				component="div"
			>
				<div>
					<p className="title">{item.text}</p>
					<CommentsList commentsArrId={this.props.arrCommentsId.comment} />
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

	handleDelete() {
		this.props.deleteArticle(this.props.item.id)
	}

	render() {
		const {identElem, item} = this.props

		return (
			<div className="article">
				{identElem === item.id ? ::this.getContent() : ""}
				{identElem === item.id ? <button onClick={::this.closeArticle}>Hide</button> : <button onClick={::this.sendId}>Show</button>}
				<button onClick={::this.handleDelete} className="delbtn">Delete article</button>
			</div>
		)
	}
}

let mapStateToProps = ((state, ownProps) => {
	return {
		item: state.articlesList.find(article => article.id === ownProps.id),
		arrCommentsId: state.articlesReducer.find(item => item.article === ownProps.id)
	}
})

export default connect(mapStateToProps, {deleteArticle})(Article)