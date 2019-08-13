import {LIST_GET_FAILURE, LIST_GET_REQUEST, LIST_GET_SUCCESS} from '../constants';
import {TListUnit} from '../../../types/list';
import {TActionGetListRequest, TActionGetListSuccess, TActionGetListFailure} from './actions.types';

export function actionGetListRequest(): TActionGetListRequest {
    return {
        type: LIST_GET_REQUEST
    };
}

export function actionGetListSuccess(
    list: Array<TListUnit>
): TActionGetListSuccess {
    return {
        type: LIST_GET_SUCCESS,
        payload: {
            list
        }
    };
}

export function actionGetListFailure(error: string): TActionGetListFailure {
    return {
        type: LIST_GET_FAILURE,
        payload: {
            error
        }
    };
}
