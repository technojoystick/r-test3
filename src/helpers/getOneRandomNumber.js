const getOneRandomNumber = ({ min = 0, max } = {}) => {
    return (Math.floor(min + Math.random() * (max + 1 - min)));
};

export default getOneRandomNumber;
