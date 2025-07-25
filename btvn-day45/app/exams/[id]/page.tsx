'use client'

import {Box, Grid} from "@mui/material";
import style from './style.module.sass'
import QuestionDescription from './Description'
import QuestionSelection from './Selection'
import HeaderBar from './Header'
import FooterBar from './Footer'
import api from "../../../plugins/api";
import {useParams} from "next/navigation";
import {createContext, useEffect, useMemo, useState} from "react";
import {ExamDetailI, ExamI, PathI, QuestionI, QuestionType} from "../../utils";

export interface Question extends QuestionI {
    isReview?: boolean
    answer?: string
}

export interface ExamDetail extends ExamDetailI {
    question: Question
}

export interface Exam extends ExamI {
    details: Array<ExamDetail>
}

// export interface AnswerI {
//   [key: number]: {
//     answer: string,
//     isReview: boolean
//   }
// }

export interface ProviderI {
    question: Question
    setQuestionIndex: (questionIndex: number) => void
    questionIndex: number
    questions: Question[]
}


const defaultExam: Exam = {
    id: undefined,
    title: '',
    description: '',
    details: [
        {
            id: undefined,
            section: 0,
            module: 0,
            question: {
                id: undefined,
                code: '',
                description: '',
                question: '',
                type: QuestionType.MULTIPLE_CHOICE,
                optionA: '',
                optionB: '',
                optionC: '',
                optionD: '',
                correctAnswer: '',
                explanation: ''
            }
        }
    ]
}

// @ts-ignore
export const PARTS: PathI[] = [
    {section: 1, module: 1},
    {section: 1, module: 2},
    {section: 2, module: 1},
    {section: 2, module: 2},
]

// @ts-ignore
export const Context: any = createContext(null)

export default function () {
    const params: any = useParams()
    const {id} = params
    const [exam, setExam] = useState<Exam>(defaultExam)
    const [partIndex, setPathIndex] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)

    /*
    * useEffect --- watch
    * */

    /*
    * khi click next or back thi questionIndex thay doi
    *   tim ra current question, current examDetail
    *
    * examDetails = exam.details
    *
    * examDetail get new value right after questionIndex changed
    * -> useMemo
    * */
    const examDetail: ExamDetail = useMemo(() => {
        return exam.details[questionIndex]
    }, [questionIndex, exam])


    const question: Question = useMemo(() => {
        return examDetail.question
    }, [examDetail])

    const getExam = async () => {
        try {
            const {data} = await api.get(`/exams/${id}`)
            setExam(data)
        } catch (e) {
            console.log(e)
        }
    }

    const provider: ProviderI = {
        question,
        setQuestionIndex,
        questionIndex,
        questions: exam.details.map(d => d.question)
    }

    useEffect(() => {
        getExam()
    }, []);

    return (
        <>
            <Context.Provider value={provider}>
                <HeaderBar/>
                <Box sx={{margin: '0 5%'}} className={style.main}>
                    <Grid container>
                        <Grid size={6} sx={{paddingTop: '10px'}}>
                            <QuestionDescription/>
                        </Grid>
                        <Grid size={6}>
                            <QuestionSelection/>
                        </Grid>
                    </Grid>
                </Box>
                <FooterBar/>
            </Context.Provider>
        </>
    )
}
