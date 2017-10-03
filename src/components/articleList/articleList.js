import React, {Component} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

//styles
import "./articleList.sass"

//decorators
import toggleOpen from "../../decorators/toggleOpen"

//selectors
import {filterArticles} from "../../redux/selectors/index"

//components
import Article from "../article/article"

class ArticleList extends Component {
	static propTypes = {
		getOpenArticle: PropTypes.func,
		isOpenId: PropTypes.string
	}

	render() {
		const {articles} = this.props
		return (
			<div className="articleList">
				{
					articles.map(elem => {
						return <Article
							id={elem.article}
							key={elem.id}
							identElem = {this.props.isOpenId}
							getOpenArticle={this.props.getOpenArticle}
						/>
					})
				}
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		articles: filterArticles(state)
	}
}

export default connect(mapStateToProps)(toggleOpen(ArticleList))