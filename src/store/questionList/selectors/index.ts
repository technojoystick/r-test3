import {createSelector} from 'reselect';

import {TRootState} from "../../../types/redux";
import {TListUnit} from "../../../types/list";
// import {getRandomedList} from '../../../containers/questionBoxContainer';
import {getRandomedList} from '../../../utils/getRandomedList';

// export const selectSelectedList = (state: TRootState): Array<TListUnit> => state.list.list;

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
