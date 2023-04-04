import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

// Router
import { BrowserRouter } from "react-router-dom"

// Store
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import createSagaMiddleware from "redux-saga"
import reducers from "./store/reducers"
import * as sagas from "./store/sagas"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers
    ? composeEnhancers(applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas.watchSounds)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
