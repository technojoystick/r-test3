export type ListUnit = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    randomizedList?: string[],
    truthfully?: boolean
}


export type TState = {
    activeIndex: number,
    activeValue: string,
    error: string,
    list: Array<ListUnit>,
    resultVisible: boolean,
}
