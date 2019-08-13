import React from 'react';
import { Link } from "react-router-dom";
import { useSelectedAnswers } from '../../hooks/useSelectedAnswers';
import { useSelectedList } from '../../hooks/useSelectedList';
import { TListAnswers, TListUnit } from '../../types/list';
import StatisticList from '../statisticList';
import { TFilterByDiffList } from './resultBox.types';

export function addTruthfully(chosenList: TListAnswers, list: Array<TListUnit>): Array<TListUnit> {
    return list.map((element, indx) => {
        const truthfully = chosenList[indx].includes(element.correct_answer) && chosenList[indx].length === 1;

        return ({
            ...element,
            truthfully,
        });
    });
}

export function filterByDifficulty(list: Array<TListUnit>): TFilterByDiffList {
    return list.reduce((acc, element) => {
        acc.hasOwnProperty(element.difficulty)
            ? acc[element.difficulty].push(element)
            : acc[element.difficulty] = [element];
        return acc;
    }, {});
}

function ResultBox() {
    const list = useSelectedList();
    const chosenList = useSelectedAnswers();

    const truthfullyList = addTruthfully(chosenList, list);
    const filteredDataByDifficulty = filterByDifficulty(truthfullyList);

    return (
        <div className='result-box'>
            <div className='result-box__row result-box__row_container'>
                <StatisticList data={filteredDataByDifficulty} />
            </div>
            <div className='result-box__row result-box__row_controls'>
                <Link
                    className='btn btn_blue'
                    to={'/'}
                >
                    Get new questions
                </Link>
            </div>
        </div>
    );
}

export default ResultBox;
