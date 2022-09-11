
import { legacy_createStore ,combineReducers,applyMiddleware } from "redux"
import AppReducer from "../AppReducer/reducer"
import { AuthReducer } from "../AuthReducer/reducer"
 import thunk from "redux-thunk"

  const rootReducer=combineReducers({AuthReducer,AppReducer})
const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}