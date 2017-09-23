import React from "react"
import ReactDOM from "react-dom"
import Routing from "./routing"
import {AppContainer} from "react-hot-loader"

const renderApp = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById("mount_plate")
	)
}

renderApp(Routing)

if(module.hot) {
	module.hot.accept("./app", () => {renderApp(Routing)})
}