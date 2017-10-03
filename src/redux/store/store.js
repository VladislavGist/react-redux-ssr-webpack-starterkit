import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"

//middlewars
import reduxThunk from "redux-thunk"
import logger from "../middlewars/logger"
import generateId from "../middlewars/generateId"

import rootReducer from "../reducers/rootReducer"
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, generateId, logger)))