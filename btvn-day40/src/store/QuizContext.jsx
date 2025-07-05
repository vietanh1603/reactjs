import { createContext, useReducer, useContext } from "react";

const QuizContext = createContext();

const initialState = {
    currentIndex: 0,
    score: 0,
    selected: null,
    showAnswer: false,
    showDialog: false
};

function quizReducer(state, action) {
    switch (action.type) {

        case "CHOOSE_OPTION":
            return {
                ...state,
                selected: action.payload
            };

        case "NEXT": {
            const current = action.currentQuestion;
            const isCorrect = state.selected === current.answer;

            return {
                ...state,
                showAnswer: true,
                score: isCorrect ? state.score + 1 : state.score
            };
        }
        case "GO_NEXT":
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                selected: null,
                showAnswer: false
            };
        case "SHOW_DIALOG":
            return {
                ...state,
                showDialog: true
            };

        case "RESET":
            return { ...initialState };
        case "CLOSE_DIALOG":
            return { ...initialState };
        default:
            return state;
    }
}

export const QuizProvider = ({ children }) => {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    return (
        <QuizContext value={{ state, dispatch }}>
            {children}
        </QuizContext>
    );
};

export const useQuiz = () => useContext(QuizContext);
