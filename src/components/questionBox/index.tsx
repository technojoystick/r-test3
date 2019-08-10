import * as React from 'react';
import {useDispatch} from 'react-redux';
import QuestionList from '../questionList';
import {TProps} from './questionBox.types';

function QuestionBox({
                         item,
                         isLastItem,
                         handleNext,
                     }: TProps) {
    const [disabledNext, setDisabledNext] = React.useState(true);

    React.useEffect(() => {
        setDisabledNext(true);
    }, [item]);

    const handleSubmit = React.useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();

        const formData: FormData = new FormData(e.currentTarget);

        console.log(...formData.values()); // entries

        // const dispatch = useDispatch();

        handleNext();
    }, []);

    return (
        <form className='question-box' onSubmit={handleSubmit}>
            <div className='question-box__row question-box__row_container'>
                <h3>{item.category}</h3>
                <p>{item.question}</p>
                <QuestionList
                    name={`${item.difficulty}${item.randomizedList[0]}`}
                    list={item.randomizedList}
                    setDisabledNext={setDisabledNext}
                />
            </div>
            <div className='question-box__row question-box__row_controls'>
                <button
                    type='submit'
                    className='btn btn_green'
                    disabled={disabledNext}
                >
                    {isLastItem ? 'Result' : 'Next'}
                </button>
            </div>
        </form>
    )
}

export default QuestionBox;
