import {Box} from "@mui/material";
import {useContext} from "react";
import {Context, ProviderI} from "./page";

export default function () {

    const injector: ProviderI = useContext(Context)
    const {questions, setQuestionIndex} = injector
    return (
        <Box>
            {questions.map((q, index) => {
                const isAnswered = !!q.answer

                return (
                    <Box
                        key={index}
                        onClick={() => setQuestionIndex(index)}
                        sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: isAnswered ? '#1976d2' : '#fff',
                            borderRadius: 1,
                            display: 'flex',
                            marginLeft: '2px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: isAnswered ? '#fff' : '#1976d2',
                            border: '1px solid #1976d2',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        {index + 1}
                    </Box>
                )
            })}
        </Box>
    )
}