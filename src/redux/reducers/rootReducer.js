import {combineReducers} from "redux"

import firstReducer from "./firstReducer"
import articlesReducer from "./articlesReducer"
import selectReducer from "./selectReducer"
import filterReducer from "./filterReducer"

export default combineReducers({
	firstReducer,
	articlesReducer,
	selectReducer,
	filterReducer
})