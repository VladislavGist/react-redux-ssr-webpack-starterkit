import {normilizedArticles} from "../../data.js"

import {DELETE_ARTICLE} from "../constants/articlesConstants"

const articlesReducer = (state = normilizedArticles, action) => {
	switch(action.type) {
	case DELETE_ARTICLE:
		return state.filter(article => article.id !== action.payload)
	default :
		return state
	}
}

export default articlesReducer