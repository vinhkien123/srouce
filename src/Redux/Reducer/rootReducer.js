import { combineReducers } from 'redux'
import productReducer from './product'
const rootReducers = combineReducers({
    productReducer,
})
export default rootReducers