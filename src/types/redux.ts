import {RequestStatuses} from "../constants";
import {TListState} from "../store/questionList/reducer/reducer.types";
import {TListActions} from "../store/questionList/action/actions.types";
import {TAnswersActions, TAnswersState} from "../store/answers/reducer/reducer.types";

export type TRootState = {
    readonly list: TListState;
    readonly answers: TAnswersState;
};

export type TRootActions =
    | TListActions
    | TAnswersActions;

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
