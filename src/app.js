import React, { Component } from "react"

import "./styles/styles.sass"
import "./styles/base.sass"
// test

//components
import SideBar from "./components/sideBar/sideBar"
import WorkElements from "./components/workElements/workElements"
import Header from "./components/header/header"

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