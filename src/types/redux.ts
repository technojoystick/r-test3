import {RequestStatuses} from "../constants";
import {TListState} from "../store/questionList/reducer/reducer.types";
import {TListActions} from "../store/questionList/action/actions.types";

export type TRootState = {
    readonly list: TListState;
};

export type TRootActions =
    TListActions;

export interface IAction<T, P = {}, M = {}> {
    type: T;
    payload?: P;
    meta?: M;
}

export type TRequestStatus =
    | typeof RequestStatuses.INACTIVE
    | typeof RequestStatuses.REQUEST
    | typeof RequestStatuses.SUCCESS
    | typeof RequestStatuses.FAILURE;
