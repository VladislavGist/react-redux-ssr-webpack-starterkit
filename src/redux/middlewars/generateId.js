import {ADD_COMMENT} from "../constants/articlesConstants"

export default store => next => action => {
	let random = Math.random()

	if(action.type === ADD_COMMENT) {
		let modifyAction = Object.assign({}, action, action.payload.id = random)
		next(modifyAction)

	} else {
		next(action)
	}
}