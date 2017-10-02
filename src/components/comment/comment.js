import React, {Component} from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"

import {commentSelectorFactory} from "../../redux/selectors/index"

class Comment extends Component {
	static propTypes = {
		id: PropTypes.string,
		comment: PropTypes.string.isRequired
	}

	render() {
		return (
			<div>
				{this.props.commentElems.comment}
			</div>
		)
	}
}

const mapStateToProps = () => {
	//при инициализации здесь сюда единожди пришла функция
	//такой подход нужен при работе с больше чем 1 селектором. ибо не будет эффекта
	const commentSelector = commentSelectorFactory()

	//возвращаем функцию которая соединяет селектор с данными
	return (state, ownProps) => {
		return {
			commentElems: commentSelector(state, ownProps)
		}
	}
}

export default connect(mapStateToProps)(Comment)