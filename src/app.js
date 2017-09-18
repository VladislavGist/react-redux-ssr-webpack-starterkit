import React, { Component } from "react"
import {Provider} from "react-redux"
import {createStore} from "redux"

const userState = ["one", "two"]
const reducer = (state = userState, action) => {
	return state
}
const store = createStore(reducer)
window.store = store

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>Hello</div>
			</Provider>
		)
	}
}

export default App;