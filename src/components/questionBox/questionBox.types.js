import type { ListUnit } from '../../containers/questionBoxContainer/questionBoxContainer.types';

export type TProps = {
    item: ListUnit,
    changeHandler: Function,
    disableNext: boolean,
    resultBtnVisible: boolean,
    submitHandler: Function
}
