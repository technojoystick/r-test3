import {LIST_GET_REQUEST, LIST_GET_SUCCESS, LIST_GET_FAILURE} from "../constants.ts";
import {TListUnit} from "../../../types/list";
import {IAction} from "../../../types/redux";

export type TActionGetListRequest = IAction<typeof LIST_GET_REQUEST>;

export type TActionGetListSuccess = IAction<typeof LIST_GET_SUCCESS, { list: Array<TListUnit> }>;

export type TActionGetListFailure = IAction<typeof LIST_GET_FAILURE, { error: string }>;

export type TListActions =
    | TActionGetListRequest
    | TActionGetListSuccess
    | TActionGetListFailure;
