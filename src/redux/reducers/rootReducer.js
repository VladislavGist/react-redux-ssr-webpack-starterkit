import {combineReducers} from "redux"

import firstReducer from "./firstReducer"
import articlesReducer from "./articlesReducer"
import selectReducer from "./selectReducer"
import filterReducer from "./filterReducer"
import commentsList from "./commentsReducer"
import articlesList from "./articlesList"

export default combineReducers({
	firstReducer,
	articlesReducer,
	selectReducer,
	filterReducer,
	commentsList,
	articlesList
})