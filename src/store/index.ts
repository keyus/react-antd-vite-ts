import { createStore, combineReducers } from 'redux'
import * as reducer from './reducer'

export default createStore(
    combineReducers(reducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)