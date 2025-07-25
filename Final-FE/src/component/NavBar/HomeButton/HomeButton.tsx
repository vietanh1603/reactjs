import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Button} from "@mui/material";
import {Link} from "react-router-dom"

export default function(){
    return(
        <>
            <Link to='/classes'>
                <Button
                    variant="text"
                    startIcon={<HomeOutlinedIcon/>}
                    className="home-button"
                    size={"large"}
                >
                    Trang chủ
                </Button>
            </Link>
        </>
    )

}