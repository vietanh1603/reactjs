
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {handleLogin} from '../../plugins/api.js';

const {body, button, form, input, linkLeft,
    linkRight, links, paragraph, title} = {
    body: {
        background: '#c0c0c0',
        fontFamily: "'Raleway', sans-serif",
        color: '#666',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    },
    form: {
        padding: '40px 50px',
        maxWidth: '300px',
        width: '100%',
        borderRadius: '5px',
        background: '#fff',
        boxShadow: '1px 1px 1px #666',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        display: 'block',
        boxSizing: 'border-box',
        margin: '10px 0',
        padding: '14px 12px',
        fontSize: '16px',
        borderRadius: '2px',
        fontFamily: "'Raleway', sans-serif",
        border: '1px solid #c0c0c0',
        transition: '0.2s',
    },
    button: {
        width: '100%',
        height: '48px',
        border: 'none',
        background: '#EF5350',
        color: 'white',
        fontWeight: 'bold',
        transition: '0.2s',
        margin: '20px 0',
        cursor: 'pointer',
    },
    title: {
        margin: '20px 0 0',
        color: '#EF5350',
        fontSize: '28px',
    },
    paragraph: {
        marginBottom: '40px',
    },
    links: {
        display: 'table',
        width: '100%',
        boxSizing: 'border-box',
        borderTop: '1px solid #c0c0c0',
        marginBottom: '10px',
        paddingTop: '10px',
        fontSize: '0.8em',
    },
    linkLeft: {
        display: 'table-cell',
        textAlign: 'left',
        textDecoration: 'none',
        color: '#666',
    },
    linkRight: {
        display: 'table-cell',
        textAlign: 'right',
        textDecoration: 'none',
        color: '#666',
    },
};

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
// neu co token chuyen trang home
    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) navigate('/home');
    }, [navigate]);
// xu ly dang nhap
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(username, password, navigate);
    };
    return (
        <div style={body}>
            <form style={form} onSubmit={handleSubmit}>
                <h2 style={title}>Welcome, User!</h2>
                <p style={paragraph}>Please log in</p>
                <input
                    type="text"
                    placeholder="User Name"
                    style={input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    style={input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" style={button}>Log In</button>
                <div style={links}>
                    <a href="#" style={linkLeft}>Forgot password?</a>
                    <a href="#" style={linkRight}>Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
