import React, { Component } from "react"
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import rootReducer from "./redux/reducers/rootReducer"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

import IncrementNumber from "./containers/incrementNumber"

class App extends Component {
	render() {
		return (
			<Provider store={store} key={module.hot ? Date.now() : store}>
				<IncrementNumber />
			</Provider>
		)
	}
}

export default App;