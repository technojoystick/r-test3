import { AxiosResponse } from 'axios';
import Api from '../../api';
import {TListUnit} from "../../../types/list";

function getListRequest(): Promise<AxiosResponse<{results:TListUnit[]}>> {
    return Api.get('/api.php?amount=10');
}

export default getListRequest;
