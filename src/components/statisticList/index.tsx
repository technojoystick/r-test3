import React from 'react';
import StatisticListUnit from '../statisticListUnit';
import {TFilterByDiffList} from '../resultBox/resultBox.types';

const StatisticList = ({data}: { data: TFilterByDiffList }) => (
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
