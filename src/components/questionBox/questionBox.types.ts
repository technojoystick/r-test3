import { TListUnit } from '../../types/list';

export type TProps = {
    item: TListUnit,
    isLastItem: boolean,
    disabledNext: boolean,
    handleSubmit: Function
    setDisabledNext: Function
}
