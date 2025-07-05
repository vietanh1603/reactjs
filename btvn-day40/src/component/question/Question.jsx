import { useQuiz } from "../../store/QuizContext.jsx";
import { useEffect, useState } from "react";
import {questions} from "./question.js";

export default function() {
    const [time, setTime] = useState(30);
    const { state } = useQuiz();
    const current = questions[state.currentIndex];

    useEffect(() => {
        setTime(30); // reset khi sang câu mới
    }, [state.currentIndex]);

    useEffect(() => {
        if (time <= 0) return;
        const id = setInterval(() => setTime(t => t - 1), 1000);
        return () => clearInterval(id);
    }, [time]);

    return (
        <div className="question-container">
            <div className="question-header">
                <span>Câu {state.currentIndex + 1}/15</span>
                <span className="time">{time} giây</span>
            </div>
            <p className="question">{current.question}</p>
        </div>
    );
}
