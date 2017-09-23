import React, {Component} from "react"

import Article from "./article"

class ArticleList extends Component {
	render() {
		const {data} = this.props
		return (
			<div>
				{
					data.map(elem => {
						return <Article item={elem} key={elem.id} />
					})
				}
			</div>
		)
	}
}

export default ArticleList