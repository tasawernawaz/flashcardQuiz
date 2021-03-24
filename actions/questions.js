export const ADD_QUESTION = "ADD_QUESTION"

export function addQuestionToDeck(questionData) {
    return {
        type: ADD_QUESTION,
        data: questionData
    }
}