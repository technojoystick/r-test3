import * as React from 'react';
import QuestionList from "../../components/questionList";
import { TProps } from "./questionListContainer.types";

const QuestionListContainer = ({ item, setDisabledNext }: TProps) => {
    const changeHandler = React.useCallback((e) => {
        setDisabledNext(false);
    }, []);

    return (
        <ul className='question-list'>
            <QuestionList
                item={item}
                changeHandler={changeHandler}
            />
        </ul>
    );
};

export default QuestionListContainer;
