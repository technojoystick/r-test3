import { ListUnit } from '../../containers/questionBoxContainer/questionBoxContainer.types';

export type TProps = {
    chosenList: Array<string>,
    list: Array<ListUnit>,
    refreshApp: Function,
    repeatApp: Function,
}


export type FilterByDiffList = {
    [key: string]: Array<ListUnit>,
}
