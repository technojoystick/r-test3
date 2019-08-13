import {createSelector} from 'reselect';

import { TRequestStatus, TRootState } from "../../../types/redux";
import {TListUnit} from "../../../types/list";
import {getRandomedList} from '../../../utils/getRandomedList';

export const selectSelectedList = createSelector<
    TRootState,
    Array<TListUnit>,
    Array<TListUnit>>(
    (state) => state.list.list,
    (list) => list.map(unit => ({
        ...unit,
        randomizedList: getRandomedList(unit),
    }))
);

export const selectSelectedListStatus = (state: TRootState): TRequestStatus => state.list.status;

export const selectSelectedListError = (state: TRootState): string => state.list.error;
