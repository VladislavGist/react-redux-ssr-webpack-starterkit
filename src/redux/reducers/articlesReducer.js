import data from "../../data.json"

import {DELETE_ARTICLE} from "../constants/articlesConstants"

const articlesReducer = (state = data, action) => {
	switch(action.type) {
	case DELETE_ARTICLE:
		return state.filter(article => article.id !== action.payload)
	default :
		return state
	}
}

export default articlesReducer