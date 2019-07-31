// @flow
import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from '../questionList';
import { TProps } from './questionBox.types';

const QuestionBox = <T: TProps>({
                                   item,
                                   changeHandler,
                                   disableNext,
                                   resultBtnVisible,
                                   submitHandler,
                               }: T) => (
    <div className='question-box'>
        <div className='question-box__row question-box__row_container'>
            <h3>{item.category}</h3>
            <p>{item.question}</p>
            <QuestionList
                name={`${item.difficulty}${item.randomizedList[0]}`}
                list={item.randomizedList}
                changeHandler={changeHandler}
            />
        </div>
        <div className='question-box__row question-box__row_controls'>
            <button
                type='button'
                className='btn btn_green'
                disabled={disableNext && !resultBtnVisible}
                onClick={submitHandler}
            >
                {resultBtnVisible ? 'Result' : 'Next'}
            </button>
        </div>
    </div>
);

QuestionBox.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    disableNext: PropTypes.bool.isRequired,
    item: PropTypes.shape({
        category: PropTypes.string.isRequired,
        type: PropTypes.string,
        difficulty: PropTypes.string,
        question: PropTypes.string.isRequired,
        correct_answer: PropTypes.string,
        incorrect_answers: PropTypes.arrayOf(PropTypes.string),
        randomizedList: PropTypes.arrayOf(PropTypes.string),
    }),
    resultBtnVisible: PropTypes.bool.isRequired,
    submitHandler: PropTypes.func.isRequired,
};

export default QuestionBox;
