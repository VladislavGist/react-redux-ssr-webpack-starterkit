import React, {Component} from "react"
import {Provider} from "react-redux"

import {Router, Route, indexRoute, hashHistory, browserHistory} from "react-router";

import {store} from "./redux/store/store"

// //components
import App from "./app"
import Dashboard from "./components/dashboard/dashboard"
import Distribution from "./components/distribution/distribution"
import Transactions from "./components/transactions/transactions"
import Profile from "./components/profile/profile"

class Routing extends Component {

	history() {
		switch(process.env.NODE_ENV) {
		case "development":
			return browserHistory
			break
		case "testBrowser":
			return hashHistory
			break
		case "production":
			return browserHistory
			break
		default:
			return browserHistory
		}
	}

	render() {
		return (
			<Provider store={store}>
				<Router history={::this.history()}>
					<Route component={App}>
						<indexRoute path="/" component={Dashboard} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/distribution" component={Distribution} />
						<Route path="/transactions" component={Transactions} />
						<Route path="/profile" component={Profile} />
					</Route>
				</Router>
			</Provider>
		)
	}
}

export default Routing