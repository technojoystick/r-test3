import * as React from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../../components/loader';
import QuestionBox from '../../components/questionBox';

import { useRequestList } from "../../hooks/useRequestList";
import { useSelectedList } from "../../hooks/useSelectedList";
import { useSelectedUnitFromList } from "../../hooks/useSelectedUnitFromList";
import { useDisabledNext } from "../../hooks/useDisabledNext";
import { addAnswer } from '../../store/answers/actions';

function QuestionBoxContainer(props) {
    useRequestList();

    const list = useSelectedList();
    const {
        activeItem,
        isLastItem,
        handleNext,
    } = useSelectedUnitFromList(list);
    const { disabledNext, setDisabledNext } = useDisabledNext(activeItem);

    // TODO: --use hook
    const dispatch = useDispatch();
    const handleSubmit = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();

        const formData: FormData = new FormData(e.currentTarget);

        dispatch(addAnswer([...formData.values()]));

        if (isLastItem) {
            props.history.push('/result')
        } else {
            handleNext();
        }
    });
    // --use hook

    if (list.length === 0) return <Loader />;

    return (
        <div className='page-content__container'>
            <QuestionBox
                item={activeItem}
                isLastItem={isLastItem}
                disabledNext={disabledNext}
                setDisabledNext={setDisabledNext}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default QuestionBoxContainer;
