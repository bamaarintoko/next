import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import app from "./Reducers"

const configureStore = createStore(
    app,applyMiddleware(thunkMiddleware)
)

export default configureStore