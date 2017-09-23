import React, {Component} from "react"

export default OriginalComponent => class WeappedComponent extends Component {
	state = {
		isOpen: true
	}

	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return <OriginalComponent {...this.props} {...this.state} toggleIsOpen = {::this.toggleIsOpen} />
	}
}