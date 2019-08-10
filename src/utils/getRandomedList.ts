import getOneRandomNumber from "./getOneRandomNumber";
import {ListUnit} from "../containers/questionBoxContainer/questionBoxContainer.types";

function compareRandom(): number {
    return Math.random() - 0.5;
}

export function shuffleArray<T>(array: Array<T>): Array<T> {
    return array.sort(compareRandom);
}

export function getRandomedList({ correct_answer: correctAnswer, incorrect_answers: incorrectAnswers }: ListUnit): Array<string> {
    const rIndex = getOneRandomNumber({ max: incorrectAnswers.length });

    return shuffleArray([...incorrectAnswers.slice(0, rIndex), correctAnswer, ...incorrectAnswers.slice(rIndex)]);
}
