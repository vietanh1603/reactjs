
import './style.sass'
import {Button} from "@mui/material";
import Logo from "../../../Logo/Logo.tsx";

export default function () {
    return(
        <>
            <div className='header'>
                <Logo/>
                <div className="header-menu">
                    <Button>Giới thiệu</Button>
                    <Button>Tính năng</Button>
                    <Button>Đối tác</Button>
                    <Button>Liên hệ</Button>
                </div>
            </div>
        </>
    )

}