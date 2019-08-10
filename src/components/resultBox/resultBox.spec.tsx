import { addTruthfully, filterByDifficulty } from './index';
import { hitch } from '../../utils/hitch';

describe('>>>ResultBox', () => {
    const tmpChosenList = [];

    it('+++ addTruthfully should add truthfully', () => {
        const tmp = addTruthfully(tmpChosenList, hitch.results);

        tmp.forEach((item) => {
            expect(item.hasOwnProperty('truthfully'))
                .toBe(true);
        });
    });

    it('+++ filterByDifficulty should sort array by difficulty', () => {
        const tmp = filterByDifficulty(hitch.results);

        expect(Object.keys(tmp))
            .toEqual(['hard', 'medium', 'easy']);
    });
});
