import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()
const middlewares = [
  routerMiddleware(history),
]

export interface RootState {
  routing : RouterState,
}

const rootReducer = combineReducers({
  routing  : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
)

export default rootStore
