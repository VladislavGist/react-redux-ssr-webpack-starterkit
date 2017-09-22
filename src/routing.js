import React, {Component} from "react"
// import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import {Router, Route, indexRoute, hashHistory, browserHistory} from "react-router";

import {store} from "./redux/store/store"

// //components
import App from "./app"
import Dashboard from "./containers/dashboard/dashboard"
import Distribution from "./containers/distribution/distribution"
import Transactions from "./containers/transactions/transactions"
import Profile from "./containers/profile/profile"

class Routing extends Component {
	render() {
		console.log(process.env.NODE_ENV)
		return (
			<Provider store={store} key={module.hot ? Date.now() : store}>
				<Router history={process.env.NODE_ENV === "development" ? hashHistory : browserHistory}>
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