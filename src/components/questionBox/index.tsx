import * as React from 'react';
import { useDispatch } from 'react-redux';
import QuestionListContainer from "../../containers/questionListContainer";
import { TProps } from './questionBox.types';

const QuestionBox = ({
                         item,
                         isLastItem,
                         disabledNext,
                         handleSubmit,
                         setDisabledNext,
                     }: TProps) => (
    <form className='question-box' onSubmit={handleSubmit}>
        <div className='question-box__row question-box__row_container'>
            <h3>{item.category}</h3>
            <p>{item.question}</p>
            <QuestionListContainer
                item={item}
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
);

export default QuestionBox;
