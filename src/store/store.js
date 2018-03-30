import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './reducer.js'

const store = createStore(reducers,applyMiddleware(logger))

export default store