import {combineReducers} from "redux"

import firstReducer from "./firstReducer"
import articlesReducer from "./articlesReducer"
import selectReducer from "./selectReducer"

export default combineReducers({
	firstReducer,
	articlesReducer,
	selectReducer
})