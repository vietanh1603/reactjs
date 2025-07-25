import React from 'react';
import {IconButton, OutlinedInput, FormControl, InputAdornment, InputLabel, TextField, Button} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './style.sass'
import { Link } from 'react-router-dom';


const LoginForm: React.FC = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <div className="login-container">
            <div className="login-left">
                <img
                    className="login-image"
                    src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/loginbg.jpg?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo"
                    alt="panel"
                />
                <p className="login-slogan-top">GIEO MẦM SÁNG TẠO...</p>
                <p className="login-slogan-bottom">... DẪN HƯỚNG ĐAM MÊ</p>
            </div>

            <div className="login-right">
                <div className="login-logo">
                    <img src="https://bk-exam-public.s3.ap-southeast-1.amazonaws.com/logo2.png" alt="logo"/>
                    <span className="logo-text">BK</span>
                    <span className="logo-text-orange">Star</span>
                </div>

                <div className="login-form">
                    <div className="form-title">Đăng Nhập</div>
                    <p className="form-subtitle">Cung cấp giải pháp toàn diện cho lớp học thông minh</p>

                    <TextField
                        className="form-input"
                        label='Nhập email'
                        type='email'
                        fullWidth
                    />

                    <FormControl className="form-input" variant="outlined" fullWidth>
                        <InputLabel htmlFor="password">Mật khẩu</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Mật khẩu"
                        />
                    </FormControl>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox"/>
                            Ghi nhớ tôi
                        </label>
                        <a href="#" className="forgot-password">Quên mật khẩu?</a>
                    </div>
                    <Link to='/classes'>
                        <Button fullWidth className="form-button" variant="contained" >
                            Đăng nhập
                        </Button>
                    </Link>

                </div>

                <div className="register-link">
                    <Link to="/register">
                    <a href='#'>Đăng kí</a>
                    </Link >
                    <span>tài khoản cho học viên</span>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
