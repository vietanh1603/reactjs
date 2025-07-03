import Question from './component/question/Question.jsx'
import Options from "./component/Options.jsx";
import ResultDialog from './component/ResultDialog.jsx';
import './App.css'
import { Button } from "@mui/material";
import './component/style.sass'
import { questions } from './component/question/question.js';
import { QuizProvider, useQuiz } from './context/QuizContext.jsx';
import {useEffect} from "react";


function QuizContent() {
    const { state, dispatch } = useQuiz();
    const current = questions[state.currentIndex];

    const handleSelect = (option) => {
        if (state.showAnswer) return;
        dispatch({ type: "CHOOSE_OPTION", payload: option });
    };


    const handleNext = () => {
        const current = questions[state.currentIndex];
        dispatch({ type: "NEXT", currentQuestion: current });
    };

    const handleGoNext = () => {
        dispatch({ type: "GO_NEXT" });
    };


    const handleReset = () => dispatch({ type: "RESET" });
    const handleCloseDialog = () => dispatch({ type: "CLOSE_DIALOG" });

    useEffect(() => {
        const current = questions[state.currentIndex];
        const isCorrect = state.selected === current?.answer;

        if (state.showAnswer && !isCorrect) {
            const timer = setTimeout(() => {
                dispatch({ type: "SHOW_DIALOG" });
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [state.showAnswer]);
    const isEnd = state.currentIndex >= questions.length;

    return (
        <div className={'app-container'}>
            {isEnd ? (
                <div style={{ textAlign: "center", marginTop: 40 }}>
                    <h2>Kết quả: {state.score} / {questions.length}</h2>
                    <Button variant="contained" onClick={handleReset}>Làm lại</Button>
                </div>
            ) : (
                <>
                    <Question />
                    <Options
                        options={current.options}
                        answer={current.answer}
                        selected={state.selected}
                        showAnswer={state.showAnswer}
                        onSelect={handleSelect}
                    />
                    {state.selected && !state.showAnswer && (
                        <Button
                            fullWidth
                            variant="outlined"
                            style={{ marginTop: 20 }}
                            onClick={handleNext}
                        >
                            Đây là đáp án cuối cùng của tôi
                        </Button>
                    )}

                    {state.showAnswer && !state.showDialog && (
                        <Button
                            fullWidth
                            variant="contained"
                            style={{ marginTop: 20 }}
                            onClick={handleGoNext}
                        >
                            Câu tiếp theo
                        </Button>
                    )}
                </>
            )}

            <ResultDialog
                open={state.showDialog}
                score={state.score}
                total={questions.length}
                onClose={handleCloseDialog}
            />
        </div>
    );
}

export default function App() {
    return (
        <QuizProvider>
            <QuizContent />
        </QuizProvider>
    );
}
