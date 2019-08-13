import {RequestStatuses} from '../../../constants';
import {TListState} from './reducer.types';
import {TActionGetListSuccess, TListActions} from "../action/actions.types";
import {LIST_GET_REQUEST, LIST_GET_SUCCESS, LIST_GET_FAILURE} from "../constants";


const INITIAL_STATE: TListState = {
    list: [],
    status: RequestStatuses.INACTIVE,
    error: '',
};

export function listReducer(
    state: TListState = INITIAL_STATE,
    action: TListActions
): TListState {
    switch (action.type) {
        case LIST_GET_REQUEST:
            return {
                ...state,
                status: RequestStatuses.REQUEST
            };

        case LIST_GET_SUCCESS:
            const { payload } = action as TActionGetListSuccess;

            return {
                ...state,
                ...payload,
                status: RequestStatuses.SUCCESS
            };

        case LIST_GET_FAILURE:
        default:
            return state;
    }
}
