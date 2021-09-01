import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { componseWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({

})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, componseWithDevTools(applyMiddleware(...middleware)))

export default store