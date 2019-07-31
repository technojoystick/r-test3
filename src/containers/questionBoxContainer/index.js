// @flow
import React, { Component } from 'react';
import Loader from '../../components/loader';
import QuestionBox from '../../components/questionBox';
import ResultBox from '../../components/resultBox';
import getListRequest from '../../api/resources/questionsList';
import { hitch } from '../../hitch';
import getOneRandomNumber from '../../helpers/getOneRandomNumber';
import { ListUnit, TState } from './questionBoxContainer.types';

function compareRandom(): number {
    return Math.random() - 0.5;
}

export function shuffleArray(array: Array<*>): Array<*> {
    return array.sort(compareRandom);
}

export function getRandomedList<T: ListUnit>({ correct_answer: correctAnswer, incorrect_answers: incorrectAnswers }: T): Array<string> {
    const rIndex = getOneRandomNumber({ max: incorrectAnswers.length });

    return shuffleArray([...incorrectAnswers.slice(0, rIndex), correctAnswer, ...incorrectAnswers.slice(rIndex)]);
}

class QuestionBoxContainer extends Component<{}, TState> {
    state = {
        activeIndex: 0,
        activeValue: '',
        error: null,
        list: [],
        resultVisible: false,
    };

    componentDidMount() {
        this.init();
    }

    chosenList: Array<string> = [];

    init = (): void => {
        getListRequest()
            .then(({ results }) => {
                if (results) {
                    this.setState({
                        list: results.map(unit => ({
                            ...unit,
                            randomizedList: getRandomedList(unit),
                        })),
                    });
                } else {
                    throw new Error('Some error');
                }
            })
            .catch(() => {
                this.setState({
                    list: hitch.results.map(unit => ({
                        ...unit,
                        randomizedList: getRandomedList(unit),
                    })),
                });
            });
    };

    changeHandler = ({ currentTarget }: SyntheticInputEvent<HTMLInputElement>): void => {
        this.setState({ activeValue: currentTarget.value });
    };

    submitHandler = (): void => {
        const { activeIndex, activeValue, list } = this.state;

        this.chosenList.push(activeValue);
        this.setState({ activeValue: '' });

        if (list.length !== this.chosenList.length) {
            this.setState({ activeIndex: activeIndex + 1 });
        } else {
            this.setState({ resultVisible: true });
        }
    };

    repeatApp = (): void => {
        this.chosenList = [];
        this.setState({
            activeIndex: 0,
            resultVisible: false,
        });
    };

    refreshApp = (): void => {
        this.chosenList = [];
        this.setState({
            activeIndex: 0,
            list: [],
            resultVisible: false,
        });

        this.init();
    };

    render() {
        const {
            activeIndex,
            activeValue,
            error,
            list,
            resultVisible,
        } = this.state;

        if (error) return <h1>{error}</h1>;

        if (list.length === 0) return <Loader />;

        return (
            <div className='page-content__container'>
                {!resultVisible
                    ? (
                        <QuestionBox
                            item={list[activeIndex]}
                            changeHandler={this.changeHandler}
                            resultBtnVisible={(list.length - 1) === this.chosenList.length}
                            submitHandler={this.submitHandler}
                            disableNext={activeValue === ''}
                        />
                    ) : (
                        <ResultBox
                            chosenList={this.chosenList}
                            list={list}
                            repeatApp={this.repeatApp}
                            refreshApp={this.refreshApp}
                        />
                    )
                }
            </div>
        );
    }
}

export default QuestionBoxContainer;
