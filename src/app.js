import React, { Component } from "react"
import {Provider} from "react-redux"

import {store} from "./redux/store/store"

import "./styles/styles.sass";
import "./styles/base.sass";

import SideBar from "./containers/sideBar/sideBar"
import WorkElements from "./containers/workElements/workElements"

class App extends Component {
	render() {
		return (
			<Provider store={store} key={module.hot ? Date.now() : store}>
				<div>
					<SideBar />
					<WorkElements />
				</div>
			</Provider>
		)
	}
}

export default App;