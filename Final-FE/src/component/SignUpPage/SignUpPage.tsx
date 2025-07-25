import { Button, TextField } from "@mui/material";
import './style.sass'
import {Link} from "react-router-dom"
export default function SignUp() {
    return (
        <div className="sign-up-container">
            <div className="sign-up-logo">
                <img
                    className="logo-image"
                    src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/logo2.png"
                    alt="logo"
                />
                <span className="logo-text">BK</span>
                <span className="logo-text-orange">Star</span>
            </div>

            <h3 className="sign-up-title">Đăng kí học viên</h3>

            <form className="sign-up-form">
                <div className="form-group">
                    <label htmlFor="field-name" className="form-label">Tên của bạn</label>
                    <TextField
                        className="form-input"
                        placeholder="Nhập tên của bạn"
                        type="text"
                        id="field-name"
                        variant="outlined"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="field-email" className="form-label">Địa chỉ email</label>
                    <TextField
                        className="form-input"
                        placeholder="Nhập địa chỉ email"
                        type="email"
                        id="field-email"
                        variant="outlined"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label">Mật khẩu</label>
                    <TextField
                        className="form-input"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        id="password"
                        variant="outlined"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="re-password" className="form-label">Nhập lại mật khẩu</label>
                    <TextField
                        className="form-input"
                        placeholder="Nhập lại mật khẩu"
                        type="password"
                        id="re-password"
                        variant="outlined"
                    />
                </div>
            </form>

            <div className="sign-up-actions">
                <Link to="/login" >
                    <Button variant="outlined">
                        Hủy
                    </Button>
                </Link>

                <Button variant="contained" color="primary" className="btn-submit">Đăng ký</Button>
            </div>
        </div>
    );
}
