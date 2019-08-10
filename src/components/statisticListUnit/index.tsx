import React from 'react';
import { TProps } from './statisticListUnit.types';
import { ListUnit } from '../../containers/questionBoxContainer/questionBoxContainer.types';

function truthfullyCount(value: Array<ListUnit>): number {
    return value.reduce((acc, item) => {
        if (item.truthfully) return acc + 1;
        return acc;
    }, 0);
}

const StatisticListUnit = ({ name, value }: TProps) => (
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

export default StatisticListUnit;
