import { createSelector } from 'reselect';
import { TListAnswers } from '../../../types/list';

import { TRootState } from "../../../types/redux";

export const selectSelectedAnswers = createSelector<
    TRootState,
    TListAnswers,
    TListAnswers>(
    (state) => state.answers.answers,
    (answers) => answers
);
