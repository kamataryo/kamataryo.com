import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'

import counterReducer from './reducers/example'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

export interface RootState {
  routing  : RouterState,
}

const rootReducer = combineReducers({
  counter  : counterReducer,
  routing  : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(middleware),
)

export default rootStore
