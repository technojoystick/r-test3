import React from 'react';
import { shallow } from 'enzyme';
import QuestionBoxContainer from './index';
import Loader from '../../components/loader';
import QuestionBox from '../../components/questionBox';
import { hitch } from '../../utils/hitch';
import { shuffleArray, getRandomedList } from '../../utils/getRandomedList';

function diff(a1, a2) {
    return a1.filter(i => !a2.includes(i))
        .concat(a2.filter(i => !a1.includes(i)));
}

describe('>>>MainContainer', () => {
    const mockArray = ['One', 'Two', 'Three'];
    const mockItem = 'Four';
    const defaultState = {
        activeIndex: 0,
        activeValue: '',
        error: null,
        list: [],
        resultVisible: false,
    };
    let container;

    beforeEach(() => {
        container = shallow(<QuestionBoxContainer />);
    });

    it('renders one <Loader /> component', () => {
        expect(container.find(Loader).length)
            .toEqual(1);
    });

    // it('+++ should have defaultState', () => {
    //     expect(container.state())
    //         .toEqual(defaultState);
    // });

    it('+++ shuffled Array should be the same Array', () => {
        const tmp = shuffleArray(mockArray);

        expect(diff(tmp, mockArray))
            .toEqual([]);
    });

    it('+++ randomed Array should be the same Array + 1 item', () => {
        const unit = {
            category: '',
            type: '',
            difficulty: '',
            question: '',
            correct_answer: mockItem,
            incorrect_answers: mockArray,
        }

        const a = getRandomedList(unit);
        const b = [...mockArray, mockItem];

        expect(diff(a, b))
            .toEqual([]);
    });

    // it('renders one <QuestionBox /> component after get list', () => {
    //     container.setState({
    //         list: hitch.results.map(unit => ({
    //             ...unit,
    //             randomizedList: getRandomedList(unit),
    //         })),
    //     });

    //     expect(container.find(QuestionBox).length)
    //         .toEqual(1);
    // });

    // it('changeHandler method', () => {
    //     const tmp = 'test';
    //     container.instance()
    //         .changeHandler({ currentTarget: { value: tmp } });

    //     expect(container.state().activeValue)
    //         .toEqual(tmp);
    // });
});
