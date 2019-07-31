// @flow
import React from 'react';
import PropTypes from 'prop-types';
import StatisticListUnit from '../statisticListUnit';
import { FilterByDiffList } from '../resultBox/resultBox.types';

const StatisticList = ({ data }: FilterByDiffList) => (
    <div className='statistic-list'>
        {Object.keys(data)
            .map((key) => (
                <StatisticListUnit
                    key={key}
                    name={key}
                    value={data[key]}
                />
            ))}
    </div>
);

StatisticList.propTypes = {
    data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string,
        type: PropTypes.string,
        difficulty: PropTypes.string,
        question: PropTypes.string,
        correct_answer: PropTypes.string,
        incorrect_answers: PropTypes.arrayOf(PropTypes.string),
        randomizedList: PropTypes.arrayOf(PropTypes.string),
    }))).isRequired,
};

export default StatisticList;
