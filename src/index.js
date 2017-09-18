import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import {AppContainer} from "react-hot-loader"

const renderApp = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById("mount_plate")
	)
}

renderApp(App)

if(module.hot) {
	module.hot.accept("./app", () => {renderApp(App)})
}