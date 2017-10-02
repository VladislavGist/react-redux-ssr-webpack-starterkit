import {comments} from "../../data.js"

// import {DELETE_ARTICLE} from "../constants/articlesConstants"


//вообще не понятно что это. но это складывает все элементы массива запоминая промежуточный результат
const commentMap = comments.reduce((acc, comment) => {
	acc[comment.id] = comment
	return acc
}, {})

const commentsList = (state = commentMap, action) => {
	switch(action.type) {
	default:
		return state
	}
}

export default commentsList