
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login,Post,ProtectedRoute } from './components';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/home"
                element={
                    <ProtectedRoute>
                        <Post />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default App;
