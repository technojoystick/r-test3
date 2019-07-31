// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { TProps } from './statisticListUnit.types';
import { ListUnit } from '../../containers/questionBoxContainer/questionBoxContainer.types';

function truthfullyCount(value: Array<ListUnit>): number {
    return value.reduce((acc, item) => {
        if (item.truthfully) return acc + 1;
        return acc;
    }, 0);
}

const StatisticListUnit = <T: TProps>({ name, value }: T) => (
    <div className='statistic-list__unit'>
        <h3>{name}</h3>
        {
            value.map((item) => (
                <div
                    key={item.correct_answer}
                    className='statistic-list__unit-item'
                >
                    <p>{item.question}</p>
                    <p>
                        <span>The answer is </span>
                        <span className={`statistic-list__unit-answ ${
                            item.truthfully
                                ? 'statistic-list__unit-answ_green'
                                : 'statistic-list__unit-answ_red'
                            }`}>
                            {item.correct_answer}
                        </span>
                    </p>
                </div>
            ))
        }
        <p>
            {`${truthfullyCount(value)} / ${value.length}`}
        </p>
    </div>
);

StatisticListUnit.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string,
        type: PropTypes.string,
        difficulty: PropTypes.string,
        question: PropTypes.string,
        correct_answer: PropTypes.string,
        incorrect_answers: PropTypes.arrayOf(PropTypes.string),
        truthfully: PropTypes.bool,
    })).isRequired,
};

export default StatisticListUnit;
