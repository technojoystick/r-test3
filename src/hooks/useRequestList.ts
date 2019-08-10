import * as React from 'react';
import {useDispatch} from 'react-redux';
import {effectGetList} from "../store/questionList/effects";

export function useRequestList() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(effectGetList());
    }, []);
}
