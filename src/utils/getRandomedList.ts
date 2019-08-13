import { TListUnit } from '../types/list';
import getOneRandomNumber from "./getOneRandomNumber";

function compareRandom(): number {
    return Math.random() - 0.5;
}

export function shuffleArray<T>(array: Array<T>): Array<T> {
    return array.sort(compareRandom);
}

export function getRandomedList({ correct_answer: correctAnswer, incorrect_answers: incorrectAnswers }: TListUnit): Array<string> {
    const rIndex = getOneRandomNumber({ max: incorrectAnswers.length });

    return shuffleArray([...incorrectAnswers.slice(0, rIndex), correctAnswer, ...incorrectAnswers.slice(rIndex)]);
}
