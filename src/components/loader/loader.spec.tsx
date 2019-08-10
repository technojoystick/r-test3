import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('>>>Loader', () => {
    let container;

    beforeEach(() => {
        container = shallow(<Loader />);
    });

    it('+++ should render 1 strong', () => {
        expect(container.find('strong').length)
            .toEqual(1);
    });
});
