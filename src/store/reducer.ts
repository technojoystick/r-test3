import {combineReducers} from "redux";

// Reducers
import {listReducer} from "./questionList/reducer";

// Constants
import {ReduxNamespaces} from "../constants";

// Types
import {TRootActions, TRootState} from "../types/redux";

export const rootReducer = combineReducers<TRootState, TRootActions>({
    [ReduxNamespaces.LIST]: listReducer
});
