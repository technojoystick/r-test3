// @flow
const getOneRandomNumber = <T: {min?: number, max: number}>({ min = 0, max }:T = {}): number => {
    return (Math.floor(min + Math.random() * (max + 1 - min)));
};

export default getOneRandomNumber;
