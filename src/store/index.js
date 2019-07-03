import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as user from './user/reducer'

const store = createStore(
    combineReducers({...user}),
    applyMiddleware(thunk)
);

export default store;