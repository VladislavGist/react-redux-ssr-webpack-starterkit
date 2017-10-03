import {ADD_COMMENT} from "../constants/articlesConstants"

export const addComment = data => {
	return {
		type: ADD_COMMENT,
		payload: {
			comment: data.comment,
			user: data.user
		}
	}
}