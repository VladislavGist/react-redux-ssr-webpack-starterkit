import {articles} from "../../data"

import {DELETE_ARTICLE} from "../constants/articlesConstants"

//helpers
import {arrToMap, mapToArr} from "../../helpers"

const articlesList = (state = articles, action) => {
	switch(action.type) {
	case DELETE_ARTICLE:
		let one = arrToMap(articles)
		delete one[action.payload]
		return mapToArr(one)
	default:
		return state
	}
}

export default articlesList