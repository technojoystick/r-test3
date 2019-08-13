import { createAction } from 'redux-actions';
import { ANSWER_SET } from '../constants';

const addAnswer = createAction(ANSWER_SET);

export {
    addAnswer
};
