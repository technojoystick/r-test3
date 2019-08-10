import React from 'react';
import StatisticList from '../statisticList';
import { ListUnit } from '../../containers/questionBoxContainer/questionBoxContainer.types';
import { FilterByDiffList, TProps } from './resultBox.types';

export function addTruthfully(chosenList: Array<string>, list: Array<ListUnit>): Array<ListUnit> {
    return list.map((element, indx) => ({
        ...element,
        truthfully: element.correct_answer === chosenList[indx],
    }));
}

export function filterByDifficulty(list: Array<ListUnit>): FilterByDiffList {
    return list.reduce((acc, element) => {
        acc.hasOwnProperty(element.difficulty)
            ? acc[element.difficulty].push(element)
            : acc[element.difficulty] = [element];
        return acc;
    }, {});
}

const ResultBox = ({ chosenList, list, refreshApp, repeatApp }: TProps) => {
    const truthfullyList = addTruthfully(chosenList, list);
    const filteredDataByDifficulty = filterByDifficulty(truthfullyList);

    return (
        <div className='result-box'>
            <div className='result-box__row result-box__row_container'>
                <StatisticList data={filteredDataByDifficulty} />
            </div>
            <div className='result-box__row result-box__row_controls'>
                <button
                    type='button'
                    className='btn'
                    onClick={repeatApp}
                >
                    Repeat
                </button>
                <button
                    type='button'
                    className='btn btn_blue'
                    onClick={refreshApp}
                >
                    Get new questions
                </button>
            </div>
        </div>
    );
};

export default ResultBox;
