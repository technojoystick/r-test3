// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { TProps } from './questionList.types';

const QuestionList = <T: TProps>({ list, changeHandler, name }: T) => {
    return (
        <ul className='question-list'>
            {list.map(unit => (
                <li
                    key={unit}
                    className='question-list__item'
                >
                    <label htmlFor={unit}>
                        <span className='masked-input'>
                            <input
                                id={unit}
                                className='masked-input__unit'
                                name={name}
                                onChange={changeHandler}
                                type='radio'
                                value={unit}
                            />
                            <span className='masked-input__mask' />
                            <span>{unit}</span>
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

QuestionList.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
};

export default QuestionList;
