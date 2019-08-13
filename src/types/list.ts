export type TListUnit = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    randomizedList?: string[],
    truthfully?: boolean
}

export type TListAnswers = string[][];
