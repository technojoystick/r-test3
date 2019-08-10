import {useSelector} from 'react-redux';

import { selectSelectedList } from '../store/questionList/selectors';
import {TListUnit} from "../types/list";

export function useSelectedList(): Array<TListUnit> {
    return useSelector(selectSelectedList);
}
