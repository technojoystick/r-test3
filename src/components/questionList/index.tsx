import * as React from 'react';
import { TProps } from './questionList.types';
import InputRadioItem from "../inputRadioItem";
import InputCheckboxItem from "../inputCheckboxItem";
import { QuestionTypes } from "../../constants";

const QuestionList = ({ item, changeHandler }: TProps) => {
    switch (item.type) {
        case QuestionTypes.BOOLEAN:
            return (item.randomizedList.map(unit => (
                <li
                    key={unit}
                    className='question-list__item'
                >
                    <InputRadioItem
                        name={item.type}
                        value={unit}
                        changeHandler={changeHandler}
                    />
                </li>
            )));
        case QuestionTypes.MULTIPLE:
            return (item.randomizedList.map(unit => (
                <li
                    key={unit}
                    className='question-list__item'
                >
                    <InputCheckboxItem
                        name={item.type}
                        value={unit}
                        changeHandler={changeHandler}
                    />
                </li>
            )));
        default:
            return null;
    }
};

export default QuestionList;
