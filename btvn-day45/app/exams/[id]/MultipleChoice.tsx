import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useContext, useState} from "react";
import {Context, ProviderI} from "./page";

export default function () {

    const injector: ProviderI = useContext(Context)
    const {question} = injector
    // ep component update
    const [key, setKey] = useState(0)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        question.answer = e.target.value
        setKey(key + 1)
    }

    return (
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={question.answer || ''}
            onChange={onChange}
        >
            <FormControlLabel value={'A'} control={<Radio />} label={question.optionA} />
            <FormControlLabel value={'B'} control={<Radio />} label={question.optionB} />
            <FormControlLabel value={'C'} control={<Radio />} label={question.optionC} />
            <FormControlLabel value={'D'} control={<Radio />} label={question.optionD} />
        </RadioGroup>
    )
}

