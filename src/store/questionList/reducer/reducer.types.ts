import {TRequestStatus} from '../../../types/redux';
import {TListUnit} from '../../../types/list';

export type TListState = {
    readonly list: Array<TListUnit>;
    readonly status: TRequestStatus;
    readonly error: string;
};
