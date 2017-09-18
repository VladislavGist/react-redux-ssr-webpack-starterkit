import React from "react"

//делает компоненты строкой
import { renderToString } from "react-dom/server"

//отдает html функцию которая принимает app
import serverTemplate from "./serverTemplate"

//основной компонент приложения
import App from "./src/app"

import express from "express"
let app = express();

//отдаем статические файлы
app.use('/assets', express.static('src/assets'))
app.use('/dist', express.static('dist'))

app.get("/", (req, res) => {
	//делаем код приложения строкой
	const appString = renderToString(<App />)
	//в базовый html помещаем код приложения
	res.send(serverTemplate(appString))
})

app.listen(8081)
console.log("start ssr")