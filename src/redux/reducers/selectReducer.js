import {CHANGE_SELECT} from "../constants/selectConstants"

const selectReducer = (state = [], action) => {
	switch(action.type) {
	case CHANGE_SELECT:
		return action.payload
	default:
		return state
	}
}

export default selectReducer