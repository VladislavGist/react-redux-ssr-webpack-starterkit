import {createSelector} from "reselect"

const filterGetter = state => state.filterReducer
const articlesGetter = state => state.articlesReducer

//articlesGetter из этой функции вернутся статьи
//filterGetter из этой функции вернется массив выбраных селектов
//если они такие же как в прошлый раз, то функция не вызовется
//а если изменились, то она сработает

export const filterArticles = createSelector(articlesGetter, filterGetter, (articlesReducer, filterReducer) => {

	//фильтруем статьи
	return articlesReducer.filter(article => {
		//перебирая каждую статью смотрим, чтобы массив filterReducer.selected содержал в себе id статьи
		return !filterReducer.selected.length || filterReducer.selected.includes(article.id)
	})
})