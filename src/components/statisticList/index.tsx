import React from 'react';
import StatisticListUnit from '../statisticListUnit';
import {FilterByDiffList} from '../resultBox/resultBox.types';

const StatisticList = ({data}: { data: FilterByDiffList }) => (
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

export default StatisticList;
