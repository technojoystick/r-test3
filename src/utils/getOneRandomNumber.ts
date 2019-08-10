interface One {
    min?: number,
    max?: number
}

const getOneRandomNumber = ({min = 0, max = 1}: One = {}): number => {
    return (Math.floor(min + Math.random() * (max + 1 - min)));
};

export default getOneRandomNumber;
