import {useSelector} from 'react-redux';
import { selectSelectedAnswers } from '../store/answers/selectors';
import { TListAnswers } from '../types/list';


export function useSelectedAnswers(): TListAnswers {
    return useSelector(selectSelectedAnswers);
}
