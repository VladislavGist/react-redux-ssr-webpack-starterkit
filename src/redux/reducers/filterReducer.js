import {CHANGE_SELECT} from "../constants/selectConstants"
import {DELETE_ARTICLE} from "../constants/articlesConstants"

const defaultFilters = {
	selected: []
}

export default (filters = defaultFilters, action) => {
	switch(action.type) {
	case CHANGE_SELECT:
		return {
			...filters,
			selected: action.payload
		}
	case DELETE_ARTICLE:
		return {
			...filters,
			selected: filters.selected.filter(id => id !== action.payload.id)
		}	
	default:
		return filters	
	}
}