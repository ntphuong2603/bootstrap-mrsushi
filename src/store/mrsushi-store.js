import { applyMiddleware } from "redux"
import promiseMiddeware from 'redux-promise'
import { compose, createStore } from "redux"
import reducersIndex from "./reducers/reducersIndex"


const MrSushiStore = () => {
    const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducersIndex,
        composeEnhances(applyMiddleware(promiseMiddeware))
    )

    return store
}

export default MrSushiStore