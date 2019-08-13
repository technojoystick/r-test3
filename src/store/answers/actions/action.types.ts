import {ANSWER_SET} from '../constants';
import {IAction} from '../../../types/redux';

export type TActionSetAnswer = IAction<typeof ANSWER_SET, string[]>;
