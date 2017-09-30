import {DELETE_ARTICLE} from "../constants/articlesConstants"

export const deleteArticle = id => {
	return {
		type: DELETE_ARTICLE,
		payload: id
	}
}