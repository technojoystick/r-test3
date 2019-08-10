import {actionGetListFailure, actionGetListRequest, actionGetListSuccess} from "../action";
import getListRequest from "../../../api/resources/questionsList";

export function effectGetList() {
    return (dispatch) => {
        dispatch(actionGetListRequest());

        return getListRequest()
            .then((response) => response.data.results)
            .then((list) => {
                dispatch(actionGetListSuccess(list));
            })
            .catch(({ message = 'none' }) => {
                dispatch(actionGetListFailure(message));
            })
    }
}
