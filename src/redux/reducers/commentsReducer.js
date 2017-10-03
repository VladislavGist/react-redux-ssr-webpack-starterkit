import {comments} from "../../data.js"

//helpers
import {arrToMap} from "../../helpers"

import {ADD_COMMENT} from "../constants/articlesConstants"

const commentsList = (state = arrToMap(comments), action) => {

	let {payload} = action

	switch(action.type) {
	case ADD_COMMENT:
		return {
			...state,
			[payload.id]: {
				comment: action.payload.comment,
				user: action.payload.user,
				id: action.payload.id
			}
		}
	default:
		return state
	}
}

export default commentsList