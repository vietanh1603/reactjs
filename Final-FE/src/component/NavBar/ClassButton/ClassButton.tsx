import AddIcon from '@mui/icons-material/Add';
import {Button} from "@mui/material";
import {Link} from "react-router-dom"

export default function () {
    return(
        <>
            <Link to='/classes/add'>
                <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    className="create-class-button"
                    size={"large"}
                >
                    Tạo lớp
                </Button>
            </Link>
        </>
    )
}