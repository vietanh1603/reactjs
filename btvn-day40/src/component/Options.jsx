import { Button } from "@mui/material";

export default function ({ options, selected, answer, showAnswer, onSelect }) {
    return (
        <div className={'options-container'}>
            {options.map((option, index) => {
                let color = "primary";

                if (showAnswer) {
                    if (option === answer) {
                        color = "success";
                    } else if (option === selected) {
                        color = "error";
                    } else {
                        color = "inherit";
                    }
                } else if (selected === option) {
                    color = "secondary";
                }

                return (
                    <Button
                        key={index}
                        variant="outlined"
                        color={color}
                        onClick={() => onSelect(option)}
                        fullWidth
                    >
                        {option}
                    </Button>
                );
            })}
        </div>
    );
}
