import { 
    createStore, 
    combineReducers, 
    applyMiddleware 
} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    products: productReducer,
    filter: filterReducer
})
const store = createStore(
    reducer, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store


