import {CHANGE_SELECT} from "../constants/selectConstants"

export const changeSelect = data => {
	return {
		type: CHANGE_SELECT,
		payload: data
	}
}