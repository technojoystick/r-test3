import React from 'react';
import { TProps } from './questionList.types';

const QuestionList = ({ list, setDisabledNext, name }: TProps) => {
    const changeHandler = React.useCallback((e) => {
        setDisabledNext(false);
    }, []);

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

export default QuestionList;
