import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Auth} from './authReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth:Auth
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}

