import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {TRootActions, TRootState} from "../types/redux";

import {rootReducer} from './reducer';

const middleware = [thunk];

const composeEnhancers =
    (window[`__REDUX_DEVTOOLS_EXTENSION_COMPOSE__`] as typeof compose) || compose;

export const store = createStore<TRootState, TRootActions, {}, {}>(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);
