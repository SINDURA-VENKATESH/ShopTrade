import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers/rootReducer';
import thunk from "redux-thunk";

let middlewares=[thunk];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;