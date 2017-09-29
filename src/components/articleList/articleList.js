import React, {Component} from "react"
import PropTypes from "prop-types"

import toggleOpen from "../../decorators/toggleOpen"

import Article from "../article/article"

class ArticleList extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		getOpenArticle: PropTypes.func,
		isOpenId: PropTypes.string
	}

	render() {
		const {data} = this.props
		return (
			<div>
				{
					data.map(elem => {
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

export default toggleOpen(ArticleList)