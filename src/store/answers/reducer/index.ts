import { handleActions } from 'redux-actions';
import { TAnswersActions, TAnswersState } from './reducer.types';
import { addAnswer } from '../actions';

const INITIAL_STATE: TAnswersState = {
    answers: [],
};

export default handleActions(
    {
        [addAnswer.toString()]: (state: TAnswersState, action: TAnswersActions): TAnswersState => ({ answers: [...state.answers, action.payload] }),
    },
    INITIAL_STATE,
)
