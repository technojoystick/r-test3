import { TListAnswers } from '../../../types/list';
import {TActionSetAnswer} from '../actions/action.types';

export type TAnswersState = {
    answers: TListAnswers,
}

export type TAnswersActions = TActionSetAnswer
