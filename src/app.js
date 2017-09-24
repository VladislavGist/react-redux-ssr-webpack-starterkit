import React, { Component } from "react"

import "./styles/styles.sass"
import "./styles/base.sass"
// test

//components
import SideBar from "./containers/sideBar/sideBar"
import WorkElements from "./containers/workElements/workElements"
import Header from "./containers/header/header"

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<SideBar />
				<WorkElements>
					{this.props.children}
				</WorkElements>
			</div>
		)
	}
}

export default App