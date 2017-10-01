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
		console.log("---- update article list")
		const {articles} = this.props
		return (
			<div className="articleList">
				{
					articles.map(elem => {
						return <Article
							item={elem}
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

	//функция фильтрации статей
	//взяли все статьи
	// const filterArticles = state.articlesReducer.filter(article => {
	// 	//если .length false тогда ищем совпадения в стаьях по id с filterReducer
	// 	//ищем в selected article.id на каждой итерации
	// 	return !state.filterReducer.selected.length || state.filterReducer.selected.includes(article.id)
	// })

	return {
		articles: filterArticles(state)
	}
}

export default connect(mapStateToProps)(toggleOpen(ArticleList))