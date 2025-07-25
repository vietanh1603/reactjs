
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function AuthButtons() {
    return (
        <div>
            <Link to="/login">
                <Button variant="contained">Đăng nhập</Button>
            </Link>

            <Link to="/register">
                <Button variant="outlined">Đăng ký</Button>
            </Link>
        </div>
    );
}
