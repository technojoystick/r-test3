import { combineReducers } from 'redux'

// Reducers
import { listReducer } from './questionList/reducer'
import answerReducer from './answers/reducer'

// Constants
import { ReduxNamespaces } from '../constants'

// Types
import { TRootActions, TRootState } from '../types/redux'

export const rootReducer = combineReducers<TRootState, TRootActions>({
    [ReduxNamespaces.LIST]: listReducer,
    [ReduxNamespaces.ANSWERS]: answerReducer,
});
